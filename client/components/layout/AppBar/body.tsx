import * as React from "react";
import {Meteor} from "meteor/meteor";
import {
    AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Icon,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    WithStyles
} from "@material-ui/core";
import clsx from 'clsx';
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";

export default class extends React.Component<IProps, IState> {
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
        const {classes, t} = this.props;
        const {targetUser} = this.state;

        return <Menu
            anchorEl={this.state.targetUser}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={this.menuUser}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={Boolean(targetUser)}
            onClose={this.handleCloseUserMenu}
        >
            <MenuItem onClick={this.handleCloseUserMenu}>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={clsx(['fas fa-id-card', classes.iconMenuItem])}/>
                </ListItemIcon>
                <Typography variant={"inherit"} noWrap={true}>{t('item.profile')}</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleCloseUserMenu}>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={clsx(['fas fa-user-cog', classes.iconMenuItem])}/>
                </ListItemIcon>
                <Typography variant={"inherit"} noWrap={true}>{t('item.setting')}</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleConfirmLogout.bind(this, true)}>
                <ListItemIcon>
                    <Icon fontSize={"small"} className={clsx(['fas fa-door-open', classes.iconMenuItem])}/>
                </ListItemIcon>
                <Typography variant={"inherit"} noWrap={true}>{t('action.logout')}</Typography>
            </MenuItem>
        </Menu>
    }

    private contentConfirmLogou(): React.ReactNode {
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
                <Button autoFocus onClick={this.handleConfirmLogout.bind(this, false)} color="primary">
                    {t('action.no')}
                </Button>
                <Button onClick={this.logout} color="primary">
                    {t('action.yes')}
                </Button>
            </DialogActions>
        </Dialog>
    }

    render() {
        const {classes, t} = this.props;
        return <AppBar elevation={10} position={"fixed"} className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start">
                    <Icon className={'fas fa-bars'}/>
                </IconButton>
                <Typography className={classes.title} variant={"h6"} noWrap={true}>{t('title.application')}</Typography>
                <div className={classes.sectionMobile}>
                    <IconButton onClick={this.handleOpenUserMenu} edge="end" aria-controls={this.menuUser}>
                        <Icon className={'fas fa-user'}/>
                    </IconButton>
                </div>
            </Toolbar>
            {this.contentUserMenu()}
            {this.contentConfirmLogou()}
        </AppBar>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
    targetUser: HTMLButtonElement | null;
    showConfirmLogout: boolean;
}