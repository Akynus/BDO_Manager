import * as React from "react";
import {useTranslation} from "react-i18next";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Avatar, Box,
    Button, Card,
    CardContent, CardMedia, Container, Dialog, Divider, Fade,
    Grid,
    Icon,
    IconButton,
    ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, MenuItem,
    Tooltip,
    Typography
} from "@material-ui/core";
import CharacterClass from "/imports/objects/CharacterClass";
import {ToggleButton} from "@material-ui/lab";
import clsx from "clsx";
import {TransitionProps} from "@material-ui/core/transitions";
import ECharacterClass from "/imports/objects/ECharacterClass";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import * as yup from "yup";
import Character from "/imports/models/Character";
import TextField from "/client/components/fields/TextField";
import SelectField from "/client/components/fields/SelectField";

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

const schema = yup.object().shape({
    name: yup.string().max(30).required(),
    level: yup.number().positive().integer().required(),
    combatStyle: yup.string().oneOf(['AWAKENING', 'SUCCESSION']).required(),
    atkPre: yup.number().positive().integer().required(),
    atkAwk: yup.number().positive().integer().required(),
    defense: yup.number().positive().integer().required(),
});

export default function CharacterForm(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();
    const [opened, setOpened] = React.useState<boolean>(true);
    const [characterClass, setCharacterClass] = React.useState<ECharacterClass>(ECharacterClass.WARRIOR);
    const {control, handleSubmit, errors, watch} = useForm<Character>({resolver: yupResolver(schema)});

    function onSubmit(data: any) {
        console.log(data);
    }

    function gearScore(): number {
        const {atkPre, atkAwk, defense} = watch();
        const medium = Math.floor((Number(atkPre || 0) + Number(atkAwk || 0)) / 2);
        const gs = Number(medium) + Number(defense || 0);
        return gs;
    }

    function combatStyle(): string {
        const {combatStyle} = watch();
        return (combatStyle == "AWAKENING") ? t('item.combat_style.awakening') : t('item.combat_style.succession');
    }

    function imgClass(): string {
        const {combatStyle} = watch();

        if (CharacterClass[characterClass].image) {
            return CharacterClass[characterClass].image![combatStyle];
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
                        <Typography variant={"subtitle2"}>Select your class</Typography>
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
                <ListItemText primary={String(t(CharacterClass[characterClass].name))} secondary={combatStyle()}/>
            </ListItem>
            <Divider/>
            <Box className={classes.formPadding}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <Typography variant={"subtitle2"}>Description</Typography>
                            <Divider/>
                        </Grid>
                        <Grid item={true} xs={8}>
                            <TextField label={'Character name'} name={'name'} control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={'Level'} name={'level'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <SelectField<string> label={'Combat Style'} name={'combatStyle'} control={control}
                                                 errors={errors}>
                                <MenuItem value={"AWAKENING"}>{t('item.combat_style.awakening')}</MenuItem>
                                <MenuItem value={"SUCCESSION"}>{t('item.combat_style.succession')}</MenuItem>
                            </SelectField>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"subtitle2"}>Gear Score ({gearScore()})</Typography>
                            <Divider/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={'AP'} name={'atkPre'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={'AP Awakening'} name={'atkAwk'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={'DP'} name={'defense'}
                                       control={control} errors={errors}/>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Divider/>
            <Box className={classes.formPadding}>
                <Grid container={true} spacing={2} justify={"flex-end"}>
                    <Grid item={true}>
                        <Button>Close</Button>
                    </Grid>
                    <Grid item={true}>
                        <Button onClick={handleSubmit(onSubmit)} variant={"contained"} color={"primary"}>Save</Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    }

    return (<Dialog open={opened} fullScreen={true} TransitionComponent={TransitionDialog}>
        <Container maxWidth={"md"}>
            <ListItem>
                <ListItemText primaryTypographyProps={{variant: "h6"}} primary={'New Character'}
                              secondary={'Select your class and gear score'}/>
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
}