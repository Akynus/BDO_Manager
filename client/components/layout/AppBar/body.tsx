import * as React from "react";
import {Meteor} from "meteor/meteor";
import {
    AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Icon,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Toolbar, Tooltip,
    Typography,
    WithStyles
} from "@material-ui/core";
import clsx from 'clsx';
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";
import {withTracker} from "meteor/react-meteor-data";
import {RoutePage, SessionKeys} from "/imports/objects/GlobalVars";

class AppBarComponent extends React.Component<IProps, IState> {
    readonly menuUser = "menu-user-bar";
    readonly dialogConfirmLogout = "confirm-logout-user"

    constructor(props: IProps) {
        super(props);

        this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this);
        this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this);
        this.handleConfirmLogout = this.handleConfirmLogout.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            targetUser: null,
            showConfirmLogout: false
        }
    }

    private handleOpenUserMenu(ev: React.MouseEvent<HTMLButtonElement>): void {
        this.setState({targetUser: ev.currentTarget});
    }

    private handleCloseUserMenu(): void {
        this.setState({targetUser: null});
    }

    private handleConfirmLogout(show: boolean): void {
        this.handleCloseUserMenu();
        this.setState({showConfirmLogout: show});
    }

    private logout(): void {
        this.handleConfirmLogout(false);
        Meteor.logout();
    }

    private contentUserMenu(): React.ReactNode {
        const {t} = this.props;
        const {targetUser} = this.state;

        return <Menu
            anchorEl={this.state.targetUser}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={this.menuUser}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={Boolean(targetUser)}
            onClose={this.handleCloseUserMenu}>
            <MenuItem onClick={this.onClickRoute.bind(this, RoutePage.PROFILE)}>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={'fas fa-id-card'}/>
                </ListItemIcon>
                <Typography variant={"inherit"} noWrap={true}>{t('item.profile')}</Typography>
            </MenuItem>
            <MenuItem onClick={this.onClickRoute.bind(this, RoutePage.SETTING)}>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={'fas fa-user-cog'}/>
                </ListItemIcon>
                <Typography variant={"inherit"} noWrap={true}>{t('item.setting')}</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleConfirmLogout.bind(this, true)}>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={'fas fa-door-open'}/>
                </ListItemIcon>
                <Typography variant={"inherit"} noWrap={true}>{t('action.logout')}</Typography>
            </MenuItem>
        </Menu>
    }

    private contentConfirmLogout(): React.ReactNode {
        const {t} = this.props;
        const {showConfirmLogout} = this.state;

        return <Dialog open={showConfirmLogout} aria-labelledby={this.dialogConfirmLogout}
                       onClose={this.handleConfirmLogout.bind(this, false)}>
            <DialogTitle id={this.dialogConfirmLogout}>{t('title.logout')}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {t('description.logoutUser')}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={this.handleConfirmLogout.bind(this, false)} color="secondary">
                    {t('action.no')}
                </Button>
                <Button onClick={this.logout} color="secondary">
                    {t('action.yes')}
                </Button>
            </DialogActions>
        </Dialog>
    }

    private handleDrawer(): void {
        Session.set(SessionKeys.DRAWER_HANDLE, true);
    }

    private onClickRoute(route: string): void {
        const {history} = this.props;
        this.handleCloseUserMenu();
        history.push({pathname: route});
    }

    render() {
        const {classes, t, drawerIsOpened} = this.props;
        return <AppBar elevation={10} position={"fixed"}
                       className={clsx(classes.toolbar, {[classes.toolbarShift]: drawerIsOpened})}>
            <Toolbar className={classes.content}>
                <Tooltip title={t('description.drawerMenuShow')} placement="bottom-end"
                         className={clsx({[classes.hideMenuIcon]: drawerIsOpened})}>
                    <IconButton color="inherit" edge="start" onClick={this.handleDrawer}>
                        <Icon className={'fas fa-bars'}/>
                    </IconButton>
                </Tooltip>
                <Typography className={classes.title} variant={"h6"} noWrap={true}>{t('title.application')}</Typography>
                <div className={classes.sectionMobile}>
                    <IconButton color="inherit" onClick={this.handleOpenUserMenu} edge="end"
                                aria-controls={this.menuUser}>
                        <Icon className={'fas fa-user'}/>
                    </IconButton>
                </div>
            </Toolbar>
            {this.contentUserMenu()}
            {this.contentConfirmLogout()}
        </AppBar>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {
    drawerIsOpened: boolean;
}

interface IState {
    targetUser: HTMLButtonElement | null;
    showConfirmLogout: boolean;
}

export default withTracker(() => {
    return {
        drawerIsOpened: Session.get(SessionKeys.DRAWER_HANDLE)
    }
})(AppBarComponent);