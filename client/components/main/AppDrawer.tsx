import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Session} from "meteor/session";
import clsx from "clsx";
// @ts-ignore
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {useSession} from "react-meteor-hooks";
import ESession from "/imports/enumerables/ESession";
import {
    Divider,
    Drawer,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip
} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import ERoutes from "/imports/enumerables/ERoutes";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
    },
    opened: {
        width: drawerWidth,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    closed: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(9) + 1,
    },
    contentTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 4),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }
}));

interface IRouteItem {
    key: string;
    icon: string;
    title: string;
}


const AppDrawer: React.FunctionComponent = function (props) {
    const classes = useStyles();
    const opened = useSession(ESession.DRAWER_OPENED);
    const {t} = useTranslation();

    function closeDrawer(): void {
        Session.set(ESession.DRAWER_OPENED, false);
    }

    function goPath(path: string): void {
        FlowRouter.go(path);
    }

    function isCurrentPath(path: string): boolean {
        const current = FlowRouter.current();
        return current.path == path;
    }

    function items(): React.ReactNode {
        const routes: IRouteItem[] = [
            {key: ERoutes.HOME, icon: 'mdi mdi-home', title: 'item.home'},
            {key: ERoutes.PROFILE, icon: 'mdi mdi-card-account-details', title: 'item.profile'},
            {key: ERoutes.CHARACTERS, icon: 'mdi mdi-account-multiple', title: 'item.characters'},
            {key: ERoutes.HORSES, icon: 'mdi mdi-horseshoe', title: 'item.horses'},
            {key: ERoutes.SETTING, icon: 'mdi mdi-cogs', title: 'item.setting'},
        ];

        return <List>
            {routes.map(value => <ListItem key={value.key} onClick={() => goPath(value.key)}
                                           selected={isCurrentPath(value.key)} button={true}>
                    <ListItemIcon>
                        <Icon className={value.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={t(value.title)}/>
                </ListItem>
            )}
        </List>
    }

    return <Drawer elevation={10} variant="permanent" className={clsx(classes.root, {
        [classes.opened]: opened,
        [classes.closed]: !opened,
    })} classes={{
        paper: clsx({
            [classes.opened]: opened,
            [classes.closed]: !opened,
        })
    }}>
        <div className={classes.contentTop}>
            <Tooltip title={String(t('description.drawerMenuHide'))} placement="bottom-end">
                <IconButton edge="end" onClick={closeDrawer}>
                    <Icon className={'mdi mdi-backburger'}/>
                </IconButton>
            </Tooltip>
        </div>
        <Divider/>
        {items()}
    </Drawer>;
}

export default AppDrawer;