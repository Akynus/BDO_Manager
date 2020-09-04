import * as React from "react";
import Setting from "/imports/models/Setting";
import {
    Box,
    Divider, Grid,
    Icon, List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useTracker} from "react-meteor-hooks";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import User from "/imports/models/User";
import DiscordUserCard from "/client/components/layout/DiscordUserCard";
import {useSnackbar} from "notistack";
import {Meteor} from "meteor/meteor";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    marginCard: {
        marginTop: theme.spacing(2)
    }
}));
//</editor-folder>

export default function SettingAccountForm(props: IProps): React.ReactElement<IProps> {
    const {t} = useTranslation();
    const classes = useStyles();
    const user = useTracker<User>(() => {
        return Meteor.users.findOne({_id: Meteor.userId()!}) as User;
    });
    const {enqueueSnackbar} = useSnackbar();

    function refreshUser(): void {
        // @ts-ignore
        Meteor.loginWithDiscord({
            requestPermissions: ['identify', 'email']
        }, (error: Meteor.Error) => {
            if (error) {
                enqueueSnackbar(t('message.setting.error_refresh_user_profile'), {variant: "error"});
            } else {
                enqueueSnackbar(t('message.setting.successful_refresh_user_profile'), {variant: "success"});
            }
        });
    }

    return (<Grid container={true} spacing={3}>
        <Grid item={true} xs={12} spacing={1}>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.user_account')}
            </Typography>
            <Divider/>
            <Box className={classes.marginCard}>
                <DiscordUserCard user={user!}/>
            </Box>
            <List>
                <ListItem button={true} onClick={refreshUser}>
                    <ListItemIcon>
                        <Icon className={'mdi mdi-account-convert'}/>
                    </ListItemIcon>
                    <ListItemText primary={t('field.setting.refresh_user')}
                                  secondary={t('description.setting.refresh_user')}/>
                </ListItem>
            </List>
        </Grid>
    </Grid>)
}

interface IProps {
    object: Setting
}