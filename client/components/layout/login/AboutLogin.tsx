import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: 500,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.main},${theme.palette.primary.main}, ${theme.palette.secondary.main})`
    },
    logo: {
        top: theme.spacing(2),
        left: theme.spacing(2),
        position: 'absolute',
        color: theme.palette.getContrastText(theme.palette.primary.main),
        fontWeight: 500,
        opacity: 0.9
    },
    title: {
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(3),
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    description: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        color: theme.palette.getContrastText(theme.palette.primary.main),
        opacity: 0.6
    }
}), {classNamePrefix: 'about-login'});

export default function AboutLogin(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();

    return <div className={classes.root}>
        <Typography className={classes.logo} variant={"h5"}>{t('item.login.logo_text')}</Typography>
        <Typography className={classes.title} variant={"h3"}>{t('item.login.welcome_text')}</Typography>
        <Typography className={classes.description}
                    variant={"subtitle2"}>{t('item.login.description_text')}</Typography>
    </div>
}