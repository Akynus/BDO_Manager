import * as React from "react";
import User from "/imports/models/User";
import {
    Avatar, Badge,
    Box,
    Card,
    Grid,
    Icon,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Alert} from "@material-ui/lab";
import clsx from "clsx";
import {useTranslation} from "react-i18next";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        background: '#7289DA'
    },
    avatar: {
        background: 'none',
        color: theme.palette.getContrastText('#7289DA')
    },
    smallAvatar: {
        width: 22,
        height: 22,
        border: `2px solid none`,
    },
    icon: {
        fontSize: '2rem'
    },
    padding: {
        padding: theme.spacing(2)
    }
}), {classNamePrefix: 'discord-user-card'});
//</editor-folder>

export default function DiscordUserCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();

    return <Card className={classes.root}>
        <Grid container={true}>
            <Grid item={true} xs={12}>
                <ListItem>
                    <ListItemAvatar>
                        <Badge overlap="circle"
                               anchorOrigin={{
                                   vertical: 'top',
                                   horizontal: 'right',
                               }}
                               badgeContent={<Avatar className={classes.smallAvatar} src={props.user.profile.avatar}>
                                   <Icon className={'mdi mdi-account'}/>
                               </Avatar>}>
                            <Avatar className={classes.avatar}>
                                <Icon className={clsx(['mdi mdi-discord', classes.icon])}/>
                            </Avatar>
                        </Badge>
                    </ListItemAvatar>
                    <ListItemText primary={props.user.profile.username} secondary={props.user.profile.email}/>
                </ListItem>
            </Grid>
            <Grid item={true} xs={12}>
                <Box className={classes.padding}>
                    <Alert severity="warning"
                           color={"info"}>{t('message.setting.alert_authentication_third_party')}</Alert>
                </Box>
            </Grid>
        </Grid>
    </Card>
}

interface IProps {
    user: User;
}