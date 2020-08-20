import * as React from "react";
import {
    Backdrop,
    Button,
    Card,
    CardContent, CircularProgress,
    Grid,
    Icon, IconButton,
    Link,
    Tooltip,
    Typography
} from "@material-ui/core";
// @ts-ignore
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {useSnackbar} from "notistack";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import * as yup from "yup";
import TextField from "/client/components/fields/TextField";
import {Meteor} from "meteor/meteor";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        zIndex: 1,
        width: 350,
        position: "relative",
    },
    content: {
        width: 350,
        padding: theme.spacing(3),
    },
    icon: {
        color: theme.palette.secondary.main
    },
    titleCard: {
        marginBottom: theme.spacing(2),
    },
    loading: {
        position: "absolute",
        zIndex: theme.zIndex.drawer
    }
}));
//</editor-folder>

//<editor-folder defaultstate="collapsed" desc="Types">
type LoginObject = {
    username: string;
    password: string;
}
//</editor-folder>

export default function LoginForm(): React.ReactElement {
    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()
    });
    const classes = useStyles();
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();
    const [loading, setLoading] = React.useState<boolean>(false);
    const {control, handleSubmit, errors, setValue, getValues} = useForm<LoginObject>({
        resolver: yupResolver(schema)
    });

    function onSubmit(): void {
        setLoading(true);
        const object = getValues();
        Meteor.loginWithPassword(object.username, object.password, error => {
            setLoading(false);
            if (error) {
                setValue('password', '');
                enqueueSnackbar(t('message.login_failed'), {variant: "error"});
                return;
            }
            FlowRouter.go('/home');
        });
    }

    return <Card className={classes.root} elevation={10}>
        <CardContent className={classes.content}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12}>
                        <Grid container={true} alignItems={"center"} justify={"center"} direction={"column"}>
                            <Grid item={true}>
                                <Typography className={classes.titleCard}
                                            variant={"h5"}>{t('title.welcome')}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField label={String(t('field.user'))} name={'username'} control={control} errors={errors}/>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField type={"password"} label={String(t('field.password'))} name={'password'}
                                   control={control}
                                   errors={errors}/>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Button size={"large"} variant={"contained"} color={"primary"} fullWidth={true}
                                type={"submit"}>{t('action.login')}</Button>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Link component="button" variant="subtitle2"
                              color={"textSecondary"}>{t('action.forgotPassword')}</Link>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Grid container={true} justify={"center"}>
                            <Grid item={true}>
                                <Tooltip title={String(t('description.loginWithFacebook'))} placement="top">
                                    <IconButton color={"primary"}>
                                        <Icon className={'mdi mdi-facebook'}/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item={true}>
                                <Tooltip title={String(t('description.loginWithDiscord'))} placement="top">
                                    <IconButton color={"primary"}>
                                        <Icon className={'mdi mdi-discord'}/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            <Backdrop className={classes.loading} open={loading}>
                <CircularProgress color={"secondary"} size={50}/>
            </Backdrop>
        </CardContent>
    </Card>;
}