import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Avatar, Card, Grow, Icon, ListItem, ListItemAvatar, ListItemText, Slide} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 200,
        objectFit: 'cover'
    },
    button: {
        background: '#7289DA',
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
            <img src={"/images/logo.png"} className={classes.logo}/>
        </Grow>
        <Slide direction="up" timeout={300} in={showItems}>
            <Card className={classes.button}>
                <ListItem dense={true} button={true} onClick={() => props.onSignIn("discord")}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <Icon className={'mdi mdi-discord'}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{className: classes.primary}}
                                  secondaryTypographyProps={{className: classes.secondary}}
                                  primary={t('item.login.discord_name')} secondary={t('item.login.discord_text')}/>
                </ListItem>
            </Card>
        </Slide>
    </div>
}

interface IProps {
    onSignIn(type: signInType): void;
}