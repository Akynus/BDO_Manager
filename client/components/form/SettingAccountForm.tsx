import * as React from "react";
import Setting from "/imports/models/Setting";
import {Divider, Grid, Typography} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useCurrentUser} from "react-meteor-hooks";
import User from "/imports/models/User";

export default function SettingAccountForm(props: IProps): React.ReactElement<IProps> {
    const {t} = useTranslation();
    const user: User = useCurrentUser();

    return (<Grid container={true} spacing={3}>
        <Grid item={true} xs={12}>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.user_account')}
            </Typography>
            <Divider/>
        </Grid>
        <Grid item={true} xs={12}>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.account_and_services')}
            </Typography>
            <Divider/>
        </Grid>
    </Grid>)
}

interface IProps {
    object: Setting
}