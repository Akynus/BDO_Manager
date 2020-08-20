import * as React from "react";
import {Session} from "meteor/session";
import {Meteor} from "meteor/meteor";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";
import {useSession} from "react-meteor-hooks";
import ESession from "/imports/enumerables/ESession";
import {
    Icon,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
    AppBar as AppBarMaterial,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button
} from "@material-ui/core";
// @ts-ignore
import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {RoutePage} from "/imports/objects/GlobalVars";
import {useTranslation} from "react-i18next";
import {useSnackbar} from "notistack";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    toolbar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbarShift: {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    content: {
        display: 'flex',
    },
    hideMenuIcon: {
        display: "none"
    },
    title: {
        display: 'none',
        marginLeft: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionMobile: {
        display: 'none',
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
}));
//</editor-folder>

const AppBar: React.FunctionComponent = function (props) {
    //<editor-folder defaultstate="collapsed" desc="Variables">
    const classes = useStyles();
    const {t} = useTranslation();
    const opened = useSession(ESession.DRAWER_OPENED);
    const {enqueueSnackbar} = useSnackbar();
    const [target, setTarget] = React.useState<Element | null>(null);
    const [showLogout, setShowLogout] = React.useState<boolean>(false);

    //</editor-folder>

    function goPath(path: string): void {
        FlowRouter.go(path);
    }

    function onLogout(): void {
        setTarget(null);
        setShowLogout(true);
    }

    function doLogout(): void {
        Meteor.logout(error => {
            if (error) {
                enqueueSnackbar(t('message.logout_failed'), {variant: "error"});
                return;
            }

            enqueueSnackbar(t('message.logout_successful'));
            goPath('/login');
        });
    }

    function openUserMenu(ev: React.MouseEvent<HTMLButtonElement>): void {
        setTarget(ev.currentTarget);
    }

    function useMenu(): React.ReactNode {
        return <Menu
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            id={"user-menu"}
            keepMounted
            anchorEl={target}
            open={Boolean(target)}
            onClose={() => setTarget(null)}>
            <MenuItem onClick={() => goPath(RoutePage.PROFILE)}>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={'mdi mdi-card-account-details'}/>
                </ListItemIcon>
                <Typography variant={"inherit"} noWrap={true}>{t('item.profile')}</Typography>
            </MenuItem>
            <MenuItem onClick={() => goPath(RoutePage.SETTING)}>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={'mdi mdi-cogs'}/>
                </ListItemIcon>
                <Typography variant={"inherit"} noWrap={true}>{t('item.setting')}</Typography>
            </MenuItem>
            <MenuItem onClick={onLogout}>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={'mdi mdi-logout-variant'}/>
                </ListItemIcon>
                <Typography variant={"inherit"} noWrap={true}>{t('action.logout')}</Typography>
            </MenuItem>
        </Menu>
    }

    function modalLogout(): React.ReactNode {
        return <Dialog open={showLogout} aria-labelledby={"modal-logout"}
                       onClose={() => setShowLogout(false)}>
            <DialogTitle id={"modal-logout"}>{t('title.logout')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {t('description.logoutUser')}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => setShowLogout(false)} color="secondary">
                    {t('action.no')}
                </Button>
                <Button onClick={doLogout} color="secondary">
                    {t('action.yes')}
                </Button>
            </DialogActions>
        </Dialog>
    }

    function openDrawer(): void {
        Session.set(ESession.DRAWER_OPENED, true);
    }

    return <AppBarMaterial elevation={10} position={"fixed"}
                           className={clsx(classes.toolbar, {[classes.toolbarShift]: opened})}>
        <Toolbar className={classes.content}>
            <Tooltip title={String(t('description.drawerMenuShow'))} placement="bottom-end"
                     className={clsx({[classes.hideMenuIcon]: opened})}>
                <IconButton color="inherit" edge="start" onClick={openDrawer}>
                    <Icon className={'mdi mdi-menu'}/>
                </IconButton>
            </Tooltip>
            <Typography className={classes.title} variant={"h6"} noWrap={true}>{t('title.application')}</Typography>
            <div className={classes.sectionMobile}>
                <IconButton color="inherit" onClick={openUserMenu} edge="end" aria-controls={"use-menu"}>
                    <Icon className={'mdi mdi-account'}/>
                </IconButton>
            </div>
        </Toolbar>
        {useMenu()}
        {modalLogout()}
    </AppBarMaterial>;
}

export default AppBar;