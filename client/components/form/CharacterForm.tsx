import * as React from "react";
import {useTranslation} from "react-i18next";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Dialog,
    Divider,
    Fade,
    Grid,
    Icon,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Tooltip,
    Typography
} from "@material-ui/core";
import ClassContext from "/imports/objects/ClassContext";
import {ToggleButton} from "@material-ui/lab";
import clsx from "clsx";
import {TransitionProps} from "@material-ui/core/transitions";
import EClasses from "/imports/enumerables/EClasses";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import * as yup from "yup";
import Character from "/imports/models/Character";
import TextField from "/client/components/fields/TextField";
import SelectField from "/client/components/fields/SelectField";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from 'notistack';
import {countGS, timingCall} from "/imports/utils/Helpers";
import Horse from "/imports/models/Horse";
import {useMethod, useMongoFetch} from "react-meteor-hooks";
import Horses from "/imports/collections/HorseCollection";
import RandomID from "/client/utils/RandomID";
import ButtonComponent from "/client/components/fields/ButtonComponent";

const TransitionDialog = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {},
    content: {
        padding: theme.spacing(2),
    },
    classIntro: {
        background: theme.palette.background.default,
        height: 300
    },
    classForm: {
        background: theme.palette.background.default,
    },
    classIcon: {
        width: 30,
        height: "auto",
    },
    classImg: {
        height: 270,
        objectFit: "cover"
    },
    classIconBrightness: {
        filter: 'contrast(100%) brightness(150%)'
    },
    toggleButton: {
        padding: theme.spacing(0.5),
        width: '100%'
    },
    formPadding: {padding: theme.spacing(2)}
}), {classNamePrefix: RandomID()});
//</editor-folder>

//<editor-folder defaultstate="collapsed" desc="Types">
type ObjectEditing = Character | undefined;
export type CharacterFormRef = {
    open: (id: ObjectEditing) => void;
    close: () => void;
}
//</editor-folder>

const _CharacterForm = React.forwardRef<CharacterFormRef>((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        open: onOpen,
        close: () => setOpened(false)
    }));

    //<editor-folder defaultstate="collapsed" desc="Variables">
    const schema = yup.object().shape({
        name: yup.string().max(30).required(),
        level: yup.number().min(1).integer().required(),
        combat: yup.string().oneOf(Object.keys(ECharacterCombat)).required(),
        horse: yup.string(),
        atkPre: yup.number().min(1).integer().required(),
        atkAwk: yup.number().min(1).integer().required(),
        defense: yup.number().min(1).integer().required(),
        link: yup.string().url().max(200)
    });
    const classes = useStyles();
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();
    const [opened, setOpened] = React.useState<boolean>(false);
    const [characterClass, setCharacterClass] = React.useState<EClasses>(EClasses.WARRIOR);
    const [current, setCurrent] = React.useState<ObjectEditing>();
    const [disableCombat, setDisableCombat] = React.useState<boolean>(false);
    const [disableAwk, setDisableAwk] = React.useState<boolean>(false);
    const horses: Horse[] = useMongoFetch(Horses.find());
    const {call, isLoading} = useMethod<any, any>(EMethod.SAVE_CHARACTER, {});
    const {control, handleSubmit, errors, watch, reset, setValue} = useForm<Character>({
        resolver: yupResolver(schema), defaultValues: {
            name: '',
            level: 1,
            atkAwk: 1,
            defense: 1,
            atkPre: 1,
            combat: ECharacterCombat.AWAKENING,
            // @ts-ignore
            horse: ''
        },
    });
    //</editor-folder>

    React.useLayoutEffect(() => {
        switch (characterClass) {
            case EClasses.ARCHER: {
                setValue('combat', ECharacterCombat.AWAKENING);
                setDisableAwk(false);
                setDisableCombat(true);
                break;
            }
            case EClasses.SHAI: {
                setValue('combat', ECharacterCombat.AWAKENING);
                setValue('atkAwk', 1);
                setDisableAwk(true);
                setDisableCombat(true);
                break;
            }
            default: {
                setDisableAwk(false);
                setDisableCombat(false);
                break;
            }
        }
    }, [characterClass]);

    function onOpen(object: ObjectEditing): void {
        setOpened(true);
        setCurrent(object);

        if (object) {
            setCharacterClass(object.class);
            Object.entries(object).map(([key, value]) => console.log(key, value));
            Object.entries(object).map(([key, value]) => setValue(key, value));
        } else {
            reset();
            setCharacterClass(EClasses.WARRIOR);
        }
    }

    function onSubmit(data: Character) {
        data.class = characterClass;
        if (current) {
            data._id = current._id;
        }

        const timing = timingCall(EMethod.SAVE_CHARACTER);
        call(data).then(() => {
            enqueueSnackbar(t('message.success_save_character'), {variant: "success"});
            setOpened(false);
        }).catch(reason => {
            console.error(reason);
            enqueueSnackbar(t('message.error_save_character'), {variant: "error"});
        }).finally(() => {
            timing();
        });
    }

    function gearScore(): number {
        const {atkPre, atkAwk, defense} = watch();
        return countGS({
            atkPre, atkAwk, defense
        }, characterClass == EClasses.SHAI);
    }

    function combatDescription(): string {
        const {combat} = watch();
        return (combat == "AWAKENING") ? t('item.combat.awakening') : t('item.combat.succession');
    }

    function imgClass(): string {
        const {combat} = watch();

        if (ClassContext[characterClass].smallImg) {
            return ClassContext[characterClass].smallImg![combat];
        } else {
            return String();
        }
    }

    function selectClass(): React.ReactElement {
        return <Card className={classes.classForm}>
            <CardMedia className={classes.classImg} image={imgClass()}
                       title={String(t(ClassContext[characterClass].name))}/>
            <CardContent>
                <Grid container={true} spacing={1}>
                    <Grid item={true} xs={12}>
                        <Typography variant={"subtitle2"}>{t('description.choseYourClass')}</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item={true} container={true} spacing={1} xs={12}>
                        {Object.keys(ClassContext).map(value => {
                            return <Grid key={ClassContext[value].value} item={true} xs={2}>
                                <Tooltip title={String(t(ClassContext[value].name))} placement={"top"}>
                                    <ToggleButton onClick={() => setCharacterClass(ClassContext[value].value)}
                                                  className={classes.toggleButton} value={ClassContext[value].value}
                                                  selected={characterClass == ClassContext[value].value}>
                                        <img className={clsx([classes.classIcon, classes.classIconBrightness])}
                                             src={ClassContext[value].icon}/>
                                    </ToggleButton>
                                </Tooltip>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    }

    function formClass(): React.ReactElement {
        return <Card className={classes.classForm}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={classes.classIconBrightness} src={ClassContext[characterClass].icon}/>
                </ListItemAvatar>
                <ListItemText primary={String(t(ClassContext[characterClass].name))} secondary={combatDescription()}/>
            </ListItem>
            <Divider/>
            <Box className={classes.formPadding}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <Typography variant={"subtitle2"}>{t('title.description')}</Typography>
                            <Divider/>
                        </Grid>
                        <Grid item={true} xs={8}>
                            <TextField label={String(t('field.character'))} name={'name'} control={control}
                                       errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={String(t('field.level'))} name={'level'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <SelectField<string> disabled={disableCombat} label={String(t('field.combat'))}
                                                 name={'combat'} control={control}
                                                 errors={errors}>
                                <MenuItem value={"AWAKENING"}>{t('item.combat.awakening')}</MenuItem>
                                <MenuItem value={"SUCCESSION"}>{t('item.combat.succession')}</MenuItem>
                            </SelectField>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <SelectField<Horse> label={String(t('field.horse'))} name={'horse'} control={control}
                                                errors={errors} allowEmpty={true} dataSource={horses}
                                                renderItem={(item, index) => {
                                                    return <MenuItem key={String(item._id)}
                                                                     value={String(item._id)}>{item.name}</MenuItem>
                                                }}/>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <TextField type={'url'} label={String(t('field.gear_score_link'))} name={'link'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"subtitle2"}>{t('title.gear_score')} ({gearScore()})</Typography>
                            <Divider/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={String(t('field.atk_pre'))} name={'atkPre'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField disabled={disableAwk} type={'number'} label={String(t('field.atk_awk'))}
                                       name={'atkAwk'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={String(t('field.defense'))} name={'defense'}
                                       control={control} errors={errors}/>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Divider/>
            <Box className={classes.formPadding}>
                <Grid container={true} spacing={2} justify={"flex-end"}>
                    <Grid item={true}>
                        <ButtonComponent onClick={() => setOpened(false)}>
                            {t('action.close')}
                        </ButtonComponent>
                    </Grid>
                    <Grid item={true}>
                        <ButtonComponent loading={isLoading} onClick={handleSubmit(onSubmit)}
                                         variant={"contained"}
                                         color={"primary"}>
                            {t('action.save')}
                        </ButtonComponent>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    }

    return (<Dialog disableEnforceFocus={true} keepMounted={true} open={opened} fullScreen={true}
                    TransitionComponent={TransitionDialog}>
        <Container maxWidth={"md"}>
            <ListItem>
                <ListItemText primaryTypographyProps={{variant: "h6"}} primary={t('title.character_form')}
                              secondary={t('description.character_form')}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => setOpened(false)}>
                        <Icon className={'mdi mdi-close'}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <Grid className={classes.content} container={true} spacing={2}>
                <Grid item={true} md={5}>
                    {selectClass()}
                </Grid>
                <Grid item={true} md={7}>
                    {formClass()}
                </Grid>
            </Grid>
        </Container>
    </Dialog>);
});

export default _CharacterForm;