import * as React from "react";
import {useTranslation} from "react-i18next";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Avatar,
    Box,
    Button,
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
import CharacterClass from "/imports/objects/CharacterClass";
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
import AbsoluteLoading from "/client/components/layout/AbsoluteLoading";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";
import EMethod from "/imports/enumerables/EMethod";
import {countGS} from "/client/utils/Helpers";

const TransitionDialog = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});

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
}));

export type CharacterFormRef = {
    open: (object?: Character) => void;
    close: () => void;
}

const CharacterForm = React.forwardRef<CharacterFormRef>((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        open: onOpen,
        close: () => setOpened(false)
    }));

    const schema = yup.object().shape({
        name: yup.string().max(30).required(),
        level: yup.number().min(1).integer().required(),
        combat: yup.string().oneOf(Object.keys(ECharacterCombat)).required(),
        horse: yup.string(),
        atkPre: yup.number().min(1).integer().required(),
        atkAwk: yup.number().min(1).integer().required(),
        defense: yup.number().min(1).integer().required(),
    });
    const classes = useStyles();
    const {t} = useTranslation();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [opened, setOpened] = React.useState<boolean>(false);
    const [characterClass, setCharacterClass] = React.useState<EClasses>(EClasses.WARRIOR);
    const {control, handleSubmit, errors, watch, reset} = useForm<Character>({
        resolver: yupResolver(schema), defaultValues: {
            level: 1,
            atkAwk: 1,
            defense: 1,
            atkPre: 1,
            combat: ECharacterCombat.AWAKENING
        }
    });

    function onOpen(object?: Character) {
        setOpened(true);

        if (object) {

        } else {
            setCharacterClass(EClasses.WARRIOR);
            reset();
        }

    }

    function onSubmit(data: Character) {
        data.class = characterClass;
        setLoading(true);
        Meteor.call(EMethod.INSERT_CHARACTER, data, (error: Meteor.Error) => {
            setLoading(false);
            if (error) {
                console.error(error)
            } else {
                setOpened(false);
            }
        });
    }

    function gearScore(): number {
        const {atkPre, atkAwk, defense} = watch();
        return countGS({atkAwk, atkPre, defense});
    }

    function combatDescription(): string {
        const {combat} = watch();
        return (combat == "AWAKENING") ? t('item.combat.awakening') : t('item.combat.succession');
    }

    function imgClass(): string {
        const {combat} = watch();

        if (CharacterClass[characterClass].smallImg) {
            return CharacterClass[characterClass].smallImg![combat];
        } else {
            return String();
        }
    }

    function selectClass(): React.ReactElement {
        return <Card className={classes.classForm}>
            <CardMedia className={classes.classImg} image={imgClass()}
                       title={String(t(CharacterClass[characterClass].name))}/>
            <CardContent>
                <Grid container={true} spacing={1}>
                    <Grid item={true} xs={12}>
                        <Typography variant={"subtitle2"}>{t('description.choseYourClass')}</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item={true} container={true} spacing={1} xs={12} justify={"space-between"}>
                        {Object.keys(CharacterClass).map(value => {
                            return <Grid key={CharacterClass[value].value} item={true} xs={2}>
                                <Tooltip title={String(t(CharacterClass[value].name))} placement={"top"}>
                                    <ToggleButton onClick={() => setCharacterClass(CharacterClass[value].value)}
                                                  className={classes.toggleButton}
                                                  selected={characterClass == CharacterClass[value].value}>
                                        <img className={clsx([classes.classIcon, classes.classIconBrightness])}
                                             src={CharacterClass[value].icon}/>
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
                    <Avatar className={classes.classIconBrightness} src={CharacterClass[characterClass].icon}/>
                </ListItemAvatar>
                <ListItemText primary={String(t(CharacterClass[characterClass].name))} secondary={combatDescription()}/>
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
                            <SelectField<string> label={String(t('field.combat'))} name={'combat'} control={control}
                                                 errors={errors}>
                                <MenuItem value={"AWAKENING"}>{t('item.combat.awakening')}</MenuItem>
                                <MenuItem value={"SUCCESSION"}>{t('item.combat.succession')}</MenuItem>
                            </SelectField>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"subtitle2"}>{t('title.gearScore')} ({gearScore()})</Typography>
                            <Divider/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={String(t('field.atkPre'))} name={'atkPre'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={String(t('field.atkAwk'))} name={'atkAwk'}
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
                        <Button onClick={() => setOpened(false)}>{t('action.close')}</Button>
                    </Grid>
                    <Grid item={true}>
                        <Button onClick={handleSubmit(onSubmit)} variant={"contained"}
                                color={"primary"}>{t('action.save')}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    }

    return (<Dialog open={opened} fullScreen={true} TransitionComponent={TransitionDialog}>
        <AbsoluteLoading loading={loading}/>
        <Container maxWidth={"md"}>
            <ListItem>
                <ListItemText primaryTypographyProps={{variant: "h6"}} primary={t('title.formCharacter')}
                              secondary={t('description.formCharacter')}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => setOpened(false)}>
                        <Icon className={'fas fa-times'}/>
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

export default CharacterForm;