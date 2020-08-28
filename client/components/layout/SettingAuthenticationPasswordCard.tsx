import * as React from "react";
import {
    Avatar, Box,
    Card,
    Icon, List,
    ListItem,
    ListItemAvatar, ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import User, {IPassword} from "/imports/models/User";
import CardLoading from "/client/components/layout/CardLoading";
import {useMethod} from "react-meteor-hooks";
import EMethod from "/imports/enumerables/EMethod";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    cardAvatar: {
        background: theme.palette.background.default,
    },
    right: {
        marginLeft: 'auto!important'
    }
}));
//</editor-folder>

export default function SettingAuthenticationPasswordCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {call, data, isLoading} = useMethod<IPassword, any>(EMethod.GET_USER_SERVICE, {});

    React.useLayoutEffect(() => {
        call("password");
    }, []);

    if (!props.user || isLoading) {
        return <CardLoading/>
    }

    function emailOption(): React.ReactNode {
        if (data?.email) {
            return <ListItem button={true}>
                <ListItemIcon>
                    <Icon className={'mdi mdi-email-edit'}/>
                </ListItemIcon>
                <ListItemText primary={'Editar email'} secondary={'Alterar endereço de email do usuário'}/>
            </ListItem>;
        } else {
            return <ListItem button={true}>
                <ListItemIcon>
                    <Icon className={'mdi mdi-email-plus'}/>
                </ListItemIcon>
                <ListItemText primary={'Adicionar email'}
                              secondary={'Você não possui nenhum email cadastrado no seu usuário'}/>
            </ListItem>;
        }
    }

    function userOption(): React.ReactNode {
        if (data?.hasPassword) {
            return <ListItem button={true}>
                <ListItemIcon>
                    <Icon className={'mdi mdi-account-edit'}/>
                </ListItemIcon>
                <ListItemText secondaryTypographyProps={{color: "error"}} primary={'Alterar nome do usuário'}
                              secondary={'Nome do usuário é utilizado durante o Login'}/>
            </ListItem>;
        } else {
            return undefined;
        }
    }

    function passwordOption(): React.ReactNode {
        if (data?.hasPassword) {
            return <ListItem button={true}>
                <ListItemIcon>
                    <Icon className={'mdi mdi-account-key'}/>
                </ListItemIcon>
                <ListItemText secondaryTypographyProps={{color: "error"}} primary={'Alterar senha do usuário'}
                              secondary={'Senha do usuário é utilizado durante o Login'}/>
            </ListItem>;
        } else {
            return <ListItem button={true}>
                <ListItemIcon>
                    <Icon className={'mdi mdi-key-change'}/>
                </ListItemIcon>
                <ListItemText primary={'Habilitar autenticação por senha'}
                              secondary={'Você também poderá acessar sua conta atraves do Nome e Senha do usuário'}/>
            </ListItem>;
        }
    }

    return (<Box>
        <Card className={classes.cardAvatar} elevation={2}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={props.user.profile.avatar}>
                        <Icon className={'mdi mdi-account'}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.user.username} secondary={data?.email || 'Sem email cadastrado'}/>
            </ListItem>
        </Card>
        <List>
            {userOption()}
            {emailOption()}
            {passwordOption()}
        </List>
    </Box>)
}

interface IProps {
    user: User | null;
}