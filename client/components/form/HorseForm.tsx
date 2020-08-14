import * as React from "react";
import {useTranslation} from "react-i18next";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Avatar, Box, Button,
    Card, CardMedia,
    Container,
    Dialog,
    Divider,
    Fade,
    Grid,
    Icon,
    IconButton,
    ListItem, ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText, MenuItem, Typography,
} from "@material-ui/core";
import {Mongo} from "meteor/mongo";
import {TransitionProps} from "@material-ui/core/transitions";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import * as yup from "yup";
import AbsoluteLoading from "/client/components/layout/AbsoluteLoading";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from 'notistack';
import {timingCall} from "/imports/utils/Helpers";
import Horse from "/imports/models/Horse";
import EHorse from "/imports/enumerables/EHorse";
import HorseContext from "/imports/objects/HorseContext";
import TextField from "/client/components/fields/TextField";
import SelectField from "/client/components/fields/SelectField";

const TransitionDialog = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {},
    content: {
        padding: theme.spacing(2),
    },
    form: {
        background: theme.palette.background.default,
    },
    avatarColor: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
    },
    imgHorse: {
        height: 270,
        objectFit: "cover"
    },
    formPadding: {padding: theme.spacing(2)}
}));
//</editor-folder>

//<editor-folder defaultstate="collapsed" desc="Types">
type OptionalId = Mongo.ObjectID | undefined;
export type HorseFormFormRef = {
    open: (id: OptionalId) => void;
    close: () => void;
}
//</editor-folder>

const HorseForm = React.forwardRef<HorseFormFormRef>((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        open: onOpen,
        close: () => setOpened(false)
    }));

    //<editor-folder defaultstate="collapsed" desc="Variables">
    const schema = yup.object().shape({
        name: yup.string().max(30).required(),
        level: yup.number().min(1).max(30).integer().required(),
        type: yup.string().oneOf(Object.keys(EHorse)).required(),
        accel: yup.number().min(1).integer().required(),
        brake: yup.number().min(1).integer().required(),
        speed: yup.number().min(1).integer().required(),
        turn: yup.number().min(1).integer().required(),
        gender: yup.string().oneOf(['male', 'female']).required(),
        krogdalo: yup.boolean().default(false)
    });
    const classes = useStyles();
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [opened, setOpened] = React.useState<boolean>(false);
    const [current, setCurrent] = React.useState<OptionalId>();
    const {control, handleSubmit, errors, watch, reset} = useForm<Horse>({
        resolver: yupResolver(schema), defaultValues: {
            name: '',
            level: 1,
            type: EHorse.COMMON,
            accel: 100,
            brake: 100,
            speed: 100,
            turn: 100,
            gender: "male",
            krogdalo: false
        },
    });

    //</editor-folder>

    function onOpen(id: OptionalId): void {
        reset();
        setOpened(true);
        setCurrent(id);
    }

    function onSubmit(data: Horse) {
        setLoading(true);

        let method = (current) ? EMethod.UPDATE_HORSE : EMethod.INSERT_HORSE;
        if (current) {
            data._id = current;
        }

        const timing = timingCall(method);
        Meteor.call(method, data, (error: any, data: any) => {
            setLoading(false);
            timing();
            if (error) {
                enqueueSnackbar(t('message.error_save_horse'), {variant: "error"});
                return;
            }
            enqueueSnackbar(t('message.success_save_horse'), {variant: "success"});
            setOpened(false);
        });
    }

    function currentHorse(): IHorse {
        const {type} = watch();
        return HorseContext[type];
    }

    function imgHorse(): React.ReactNode {
        return <Card className={classes.form}>
            <CardMedia className={classes.imgHorse} image={currentHorse().img}/>
        </Card>
    }

    function formContent(): React.ReactNode {
        return <Card className={classes.form}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={classes.avatarColor}>
                        <Icon className={'fas fa-horse-head'}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={t(currentHorse().name)}
                              secondary={t(currentHorse().isDreamHorse ? 'description.dreamHorse' : 'description.commonHorse')}/>
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
                            <TextField label={String(t('field.name'))} name={'name'} control={control}
                                       errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <TextField type={'number'} label={String(t('field.level'))} name={'level'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <SelectField<string> label={String(t('field.type'))}
                                                 name={'type'} control={control}
                                                 errors={errors}>
                                <MenuItem value={EHorse.COMMON}>{t('item.horse.common')}</MenuItem>
                                <MenuItem value={EHorse.DONKEY}>{t('item.horse.donkey')}</MenuItem>
                                <MenuItem value={EHorse.ARDUANATT}>{t('item.horse.arduanatt')}</MenuItem>
                                <MenuItem value={EHorse.DINE}>{t('item.horse.dine')}</MenuItem>
                                <MenuItem value={EHorse.DOOM}>{t('item.horse.doom')}</MenuItem>
                            </SelectField>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <SelectField<boolean> label={String(t('field.hasKrogdalo'))}
                                                  name={'krogdalo'} control={control}
                                                  errors={errors}>
                                {/* @ts-ignore*/}
                                <MenuItem value={false}>{t('action.no')}</MenuItem>
                                {/* @ts-ignore*/}
                                <MenuItem value={true}>{t('action.yes')}</MenuItem>
                            </SelectField>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <SelectField<string> label={String(t('field.gender'))}
                                                 name={'gender'} control={control}
                                                 errors={errors}>
                                <MenuItem value={"male"}>{t('item.gender.male')}</MenuItem>
                                <MenuItem value={"female"}>{t('item.gender.female')}</MenuItem>
                            </SelectField>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"subtitle2"}>{t('title.values')}</Typography>
                            <Divider/>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <TextField type={'number'} label={String(t('field.accel'))} name={'accel'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <TextField type={'number'} label={String(t('field.speed'))} name={'speed'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <TextField type={'number'} label={String(t('field.brake'))} name={'brake'}
                                       control={control} errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <TextField type={'number'} label={String(t('field.turn'))} name={'turn'}
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
                <ListItemText primaryTypographyProps={{variant: "h6"}} primary={t('title.formHorse')}
                              secondary={t('description.formHorse')}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={() => setOpened(false)}>
                        <Icon className={'fas fa-times'}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <Grid className={classes.content} container={true} spacing={2}>
                <Grid item={true} md={5}>
                    {imgHorse()}
                </Grid>
                <Grid item={true} md={7}>
                    {formContent()}
                </Grid>
            </Grid>
        </Container>
    </Dialog>);
});

export default HorseForm;