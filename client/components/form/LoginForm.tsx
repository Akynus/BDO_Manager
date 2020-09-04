import * as React from "react";
import {
    Avatar,
    Card,
    CardContent,
    Grid, Icon, ListItem, ListItemAvatar, ListItemText,
    Typography
} from "@material-ui/core";
// @ts-ignore
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {useSnackbar} from "notistack";
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
    listActionDiscord: {
        background: '#7289DA'
    },
    avatar: {
        fontSize: '2rem',
        background: 'none',
        color: '#FFFFFF'
    },
    titleCard: {
        marginBottom: theme.spacing(2),
    },
    primaryText: {
        fontWeight: 500,
        color: '#FFFFFF'
    },
    secondaryText: {
        color: '#dddddd'
    }
}), {classNamePrefix: 'login'});
//</editor-folder>

export default function LoginForm(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();

    function loginByDiscord(): void {
        // @ts-ignore
        Meteor.loginWithDiscord({
            requestPermissions: ['identify', 'email']
        }, (error: any) => {
            if (error) {
                enqueueSnackbar(t('message.login_failed'), {variant: "error"});
                return;
            } else {
                enqueueSnackbar(t('message.login_successful'), {variant: "success"});
                FlowRouter.go('/home');
            }

        });
    }

    return <Card className={classes.root} elevation={10}>
        <CardContent className={classes.content}>
            <form>
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
                        <Card className={classes.listActionDiscord}>
                            <ListItem dense={true} button={true} onClick={loginByDiscord}>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                        <Icon className={'mdi mdi-discord'}/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primaryTypographyProps={{className: classes.primaryText}}
                                              secondaryTypographyProps={{className: classes.secondaryText}}
                                              primary={t('item.discord')} secondary={t('description.login.discord')}/>
                            </ListItem>
                        </Card>
                    </Grid>
                </Grid>
            </form>
        </CardContent>
    </Card>;
}