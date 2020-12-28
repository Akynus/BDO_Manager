import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Button, Grow, Icon, Zoom} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 'auto',
        height: 150,
        objectFit: 'fill',
        marginBottom: theme.spacing(4),
        animation: 'beat 4s infinite'
    },
    button: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        borderRadius: theme.spacing(4)
    },
    avatar: {
        fontSize: '2rem',
        background: 'none',
        color: '#FFFFFF'
    },
    primary: {
        fontWeight: 500,
        color: '#FFFFFF'
    },
    secondary: {
        color: '#dddddd'
    },
    '@keyframes beat': {
        '0%': {transform: 'scale(1)'},
        '25%': {transform: 'scale(0.7)'},
        '50%': {transform: 'scale(1)'},
        '75%': {transform: 'scale(0.7)'},
        '100%': {transform: 'scale(0.1)'},
    }
}), {classNamePrefix: 'sign-in-login'});

type signInType = "discord";

export default function SignInLogin(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const [showItems, setShowItems] = React.useState<boolean>(false);
    const {t} = useTranslation();

    React.useEffect(() => {
        setTimeout(() => setShowItems(true), 500);
    }, []);

    return <div className={classes.root}>
        <Grow timeout={300} in={showItems}>
            <div>
                <img alt={t('item.login.logo_text')} src={"/images/logo.png"} className={classes.logo}/>
            </div>
        </Grow>
        <Zoom timeout={300} in={showItems}>
            <Button onClick={() => props.onSignIn("discord")} className={classes.button}
                    startIcon={<Icon className={'mdi mdi-discord'}/>} variant="contained"
                    color="primary">
                {t('item.login.discord_text')}
            </Button>
        </Zoom>
    </div>
}

interface IProps {
    onSignIn(type: signInType): void;
}