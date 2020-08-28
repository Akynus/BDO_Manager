import * as React from "react";
import Setting from "/imports/models/Setting";
import {Box, Divider, Grid, Typography} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useCurrentUser} from "react-meteor-hooks";
import SettingAuthenticationPasswordCard from "/client/components/layout/SettingAuthenticationPasswordCard";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import User from "/imports/models/User";
import SettingDiscordCard from "/client/components/layout/SettingDiscordCard";

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
    const user = useCurrentUser<User | null>();

    return (<Grid container={true} spacing={3}>
        <Grid item={true} xs={12} spacing={1}>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.user_account')}
            </Typography>
            <Divider/>
            <Box className={classes.marginCard}>
                <SettingAuthenticationPasswordCard user={user}/>
            </Box>
        </Grid>
        <Grid item={true} xs={12}>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.account_and_services')}
            </Typography>
            <Divider/>
            <Box className={classes.marginCard}>
                <SettingDiscordCard user={user}/>
            </Box>
        </Grid>
    </Grid>)
}

interface IProps {
    object: Setting
}