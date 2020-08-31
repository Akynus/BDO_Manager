import * as React from "react";
import {
    Avatar, Box,
    Card, Grid,
    Icon, Link,
    ListItem,
    ListItemAvatar,
    ListItemText, Typography,
} from "@material-ui/core";
import User, {IPassword} from "/imports/models/User";
import CardLoading from "/client/components/layout/CardLoading";
import {useMethod} from "react-meteor-hooks";
import EMethod from "/imports/enumerables/EMethod";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Alert, AlertTitle} from "@material-ui/lab";
import {useTranslation} from "react-i18next";
import {blue} from "@material-ui/core/colors";
import ChangeUsernameForm, {ChangeUsernameFormRef} from "/client/components/form/ChangeUsernameForm";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    cardAvatar: {
        background: theme.palette.background.default,
    },
    colorLink: {
        color: blue["300"]
    },
    right: {
        marginLeft: 'auto!important'
    }
}));
//</editor-folder>

export default function SettingAuthenticationPasswordCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();
    const formUsername = React.createRef<ChangeUsernameFormRef>();
    const {call, data, isLoading} = useMethod<IPassword, any>(EMethod.GET_USER_SERVICE, {});

    React.useLayoutEffect(() => {
        call("password");
    }, []);

    if (!props.user || isLoading) {
        return <CardLoading/>
    }

    function contentInsertPassword(): React.ReactNode {
        return <Alert severity="warning">
            <AlertTitle>{t('title.user_password_insert')}</AlertTitle>
            <Typography variant={"body2"} component={"h6"}>{t('description.user_password_insert')}</Typography>
            <Link variant={"subtitle2"} component="button" onClick={() => formUsername.current!.open()}
                  className={classes.colorLink}>{t('description.user_password_insert_action')}</Link>
        </Alert>
    }

    function contentChangePassword(): React.ReactNode {
        return undefined;
    }

    return (<Box>
        <Grid container={true} spacing={1}>
            <Grid item={true} xs={12}>
                <Card className={classes.cardAvatar}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={props.user.profile.avatar}>
                                <Icon className={'mdi mdi-account'}/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={props.user.username} secondary={t('field.user_name')}/>
                    </ListItem>
                </Card>
            </Grid>
            <Grid item={true} xs={12}>
                {data?.hasPassword ? contentChangePassword() : contentInsertPassword()}
            </Grid>
        </Grid>

        <ChangeUsernameForm ref={formUsername}/>

    </Box>)
}

interface IProps {
    user: User | null;
}