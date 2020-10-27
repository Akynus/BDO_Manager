import * as React from "react";
import {Mongo} from "meteor/mongo";
import {TransitionProps} from "@material-ui/core/transitions";
import {
    Avatar,
    Box,
    Button,
    Card,
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
    Typography
} from "@material-ui/core";
import AbsoluteLoading from "/client/components/layout/AbsoluteLoading";
import {useTranslation} from "react-i18next";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ClassSelector from "/client/components/form/character/ClassSelector";
import EClass from "/imports/enumerables/EClass";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import Character from "/imports/models/Character";
import {yupResolver} from "@hookform/resolvers";
import ClassContext from "/imports/objects/ClassContext";
import TextField from "/client/components/fields/TextField";
import SelectField from "/client/components/fields/SelectField";
import Horse from "/imports/models/Horse";
import {useMethod, useMongoFetch} from "react-meteor-hooks";
import Horses from "/imports/collections/HorseCollection";
import {countGS} from "/imports/utils/Helpers";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from "notistack";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {},
    content: {
        padding: theme.spacing(2),
    },
    form: {
        background: theme.palette.background.default,
    },
    brightness: {
        filter: 'contrast(100%) brightness(150%)'
    },
}), {classNamePrefix: 'character-register-form'});
//</editor-folder>

//<editor-folder defaultstate="collapsed" desc="Typing">
const TransitionDialog = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});
type idObject = Mongo.ObjectID | string;

export interface CharacterRegisterFormRef {
    open: (id?: idObject) => void;
}

//</editor-folder

const CharacterRegisterForm = React.forwardRef<CharacterRegisterFormRef>((props, ref) => {
    //<editor-folder defaultstate="collapsed" desc="Values">
    React.useImperativeHandle(ref, () => ({open: onOpen}));
    const {t} = useTranslation();
    const classes = useStyles();
    const horses: Horse[] = useMongoFetch(Horses.find());
    const {call} = useMethod<Character, any>(EMethod.GET_CHARACTER, {});
    const [currentClass, setCurrentClass] = React.useState<EClass>(EClass.WARRIOR);
    const [visible, setVisible] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [hideAwakening, setHideAwakening] = React.useState<boolean>(false);
    const [disableCombat, setDisableCombat] = React.useState<boolean>(false);
    const {enqueueSnackbar} = useSnackbar();
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
    const {control, handleSubmit, errors, watch, reset, setValue} = useForm<Character>({
        resolver: yupResolver(schema), defaultValues: {
            name: '',
            level: 1,
            atkAwk: 1,
            defense: 1,
            atkPre: 1,
            combat: ECharacterCombat.AWAKENING,
            link: '',
            // @ts-ignore
            horse: ''
        },
    });
    React.useLayoutEffect(() => {
        switch (currentClass) {
            case EClass.ARCHER: {
                setValue('combat', ECharacterCombat.AWAKENING);
                setHideAwakening(false);
                setDisableCombat(true);
                break;
            }
            case EClass.SHAI: {
                setValue('combat', ECharacterCombat.SUCCESSION);
                setValue('atkAwk', 1);
                setHideAwakening(true);
                setDisableCombat(true);
                break;
            }
            default: {
                setHideAwakening(false);
                setDisableCombat(false);
                break;
            }
        }
    }, [currentClass]);

    //</editor-folder>
    function onOpen(id?: idObject): void {
        setVisible(true);
        setCurrentClass(EClass.WARRIOR);
        //reset();

        if (id) {
            //setLoading(true);
            setTimeout(() => getObject(id), 1000);
        }

    }

    function getObject(id: idObject): void {
        call(id).then(data => {
            setCurrentClass(data.class);
            Object.entries(data).map(([key, value]) => setValue(key, value));
        }).catch((error: any) => {
            console.error(error);
            enqueueSnackbar(t('message.not_found'));
        }).finally(() => {
            setLoading(false);
        });
    }

    function onSubmit(data: Character): void {
        data.class = currentClass;
    }

    function gearScoreLabel(): number {
        const {atkPre, atkAwk, defense} = watch();
        return countGS({
            atkPre, atkAwk, defense
        }, currentClass == EClass.SHAI);
    }

    function combatLabel(): string {
        const {combat} = watch();
        return (combat == "AWAKENING") ? t('item.combat.awakening') : t('item.combat.succession');
    }

    function contentForm(): React.ReactNode {
        return <Card className={classes.form}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={classes.brightness} src={ClassContext[currentClass].icon}/>
                </ListItemAvatar>
                <ListItemText primary={String(t(ClassContext[currentClass].name))} secondary={combatLabel()}/>
            </ListItem>
            <Divider/>
            <Box className={classes.content}>
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
                            <Typography variant={"subtitle2"}>{t('title.gear_score')} ({gearScoreLabel()})</Typography>
                            <Divider/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={String(t('field.atk_pre'))} name={'atkPre'}
                                       control={control} errors={errors}/>
                        </Grid>
                        {!hideAwakening && <Grid item={true} xs={4}>
                            <TextField type={'number'} label={String(t('field.atk_awk'))}
                                       name={'atkAwk'}
                                       control={control} errors={errors}/>
                        </Grid>}
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={String(t('field.defense'))} name={'defense'}
                                       control={control} errors={errors}/>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Divider/>
            <Box className={classes.content}>
                <Grid container={true} spacing={2} justify={"flex-end"}>
                    <Grid item={true}>
                        <Button onClick={() => setVisible(false)}>{t('action.close')}</Button>
                    </Grid>
                    <Grid item={true}>
                        <Button onClick={handleSubmit(onSubmit)} variant={"contained"}
                                color={"primary"}>{t('action.save')}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    }

    return <Dialog className={classes.root} open={visible} fullScreen={true} TransitionComponent={TransitionDialog}>
        <AbsoluteLoading loading={loading}/>
        <Container maxWidth={"md"}>
            <ListItem>
                <ListItemText primaryTypographyProps={{variant: "h6"}} primary={t('title.character_form')}
                              secondary={t('description.character_form')}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => setVisible(false)}>
                        <Icon className={'mdi mdi-close'}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <Grid className={classes.content} container={true} spacing={2}>
                <Grid item={true} md={5}>
                    <ClassSelector value={currentClass} onChange={setCurrentClass} combat={watch()['combat']}/>
                </Grid>
                <Grid item={true} md={7}>
                    {contentForm()}
                </Grid>
            </Grid>
        </Container>
    </Dialog>
});

export default CharacterRegisterForm;

