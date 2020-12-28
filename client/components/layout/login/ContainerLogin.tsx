import * as React from "react";
import {Card, Hidden} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import AboutLogin from "/client/components/layout/login/AboutLogin";
import SignInLogin from "/client/components/layout/login/SignInLogin";
import {Meteor} from "meteor/meteor";
import {useSnackbar} from "notistack";
import {useTranslation} from "react-i18next";
// @ts-ignore
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '90vw',
        height: 'auto',
        maxWidth: 800,
        display: 'flex',
        flexDirection: 'row'
    },
    about: {
        flex: 1
    },
    form: {
        flex: 1
    }
}), {classNamePrefix: 'container-login'});

type signInType = "discord";

export default function ContainerLogin(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();

    function loginByDiscord(): void {
        // @ts-ignore
        Meteor.loginWithDiscord({
            requestPermissions: ['identify', 'email'],
        }, (error: Meteor.TypedError) => {
            if (error) {
                if (error.errorType != "Accounts.LoginCancelledError") {
                    console.error(error);
                    enqueueSnackbar(t('message.login_failed'), {variant: "error"});
                }
                return;
            } else {
                enqueueSnackbar(t('message.login_successful'), {variant: "success"});
                FlowRouter.go('/home');
            }

        });
    }

    function onSignIn(type: signInType): void {
        switch (type) {
            case "discord": {
                loginByDiscord();
                break;
            }
        }
    }

    return <Card className={classes.root} elevation={3}>
        <Hidden only={['xs']}>
            <div className={classes.about}>
                <AboutLogin/>
            </div>
        </Hidden>
        <div className={classes.form}>
            <SignInLogin onSignIn={onSignIn}/>
        </div>
    </Card>
}