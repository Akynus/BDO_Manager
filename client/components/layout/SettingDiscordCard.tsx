import * as React from "react";
import CardLoading from "/client/components/layout/CardLoading";
import {useMethod} from "react-meteor-hooks";
import User, {IDiscord} from "/imports/models/User";
import EMethod from "/imports/enumerables/EMethod";
import {
    Avatar, Box,
    Card,
    Icon, IconButton,
    ListItem,
    ListItemAvatar, ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";

//<editor-folder defaultstate="collapsed" desc="Styles">
const discordColor = "#7289DA";

const useStyles = makeStyles((theme: Theme) => createStyles({
    backgroundCard: {
        background: discordColor,
    },
    avatar: {
        background: 'none',
        color: theme.palette.getContrastText(discordColor)
    },
    primaryText: {
        color: theme.palette.getContrastText(discordColor)
    },
    secondaryText: {
        color: '#ECECEC'
    },
}));
//</editor-folder>

export default function SettingDiscordCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {call, data, isLoading} = useMethod<IDiscord, any>(EMethod.GET_USER_SERVICE, {});

    React.useLayoutEffect(() => {
        call("discord");
    }, []);

    if (!props.user || isLoading) {
        return <CardLoading/>
    }

    function textPrimary(): any {
        if (data?.isUsing) {
            return data.nickname;
        } else {
            return 'Discord';
        }
    }

    function textSecondary(): any {
        if (data?.isUsing) {
            return 'Nome do usuário';
        } else {
            return 'Conecte-se com o Discord para habilitar novos recursos em sua conta';
        }
    }

    function secondaryAction(): React.ReactNode {
        if (data?.isUsing) {
            return <IconButton>
                <Icon className={clsx(['mdi mdi-account-check', classes.primaryText])}/>
            </IconButton>
        } else {
            return <IconButton>
                <Icon className={clsx(['mdi mdi-login', classes.primaryText])}/>
            </IconButton>
        }
    }

    return (<Box>
        <Card className={classes.backgroundCard}>
            {/* @ts-ignore */}
            <ListItem button={data?.isUsing}>
                <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                        <Icon className={'mdi mdi-discord'}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primaryTypographyProps={{className: classes.primaryText}}
                              secondaryTypographyProps={{className: classes.secondaryText}} primary={textPrimary()}
                              secondary={textSecondary()}/>
                <ListItemSecondaryAction>
                    {secondaryAction()}
                </ListItemSecondaryAction>
            </ListItem>
        </Card>
    </Box>)
}

interface IProps {
    user: User | null;
}