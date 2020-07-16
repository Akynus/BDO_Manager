import * as React from "react";
import {
    Divider,
    Drawer,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
    WithStyles
} from "@material-ui/core";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";
import {withTracker} from "meteor/react-meteor-data";
import {RoutePage, SessionKeys} from "/imports/objects/GlobalVars";
import clsx from "clsx";

interface IRouteItem {
    key: string;
    icon: string;
    title: string;
}

class DrawerComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    private isCurrentRoute(route: string): boolean {
        const {location} = this.props;
        return location.pathname === route;
    }

    private handleDrawer(): void {
        Session.set(SessionKeys.DRAWER_HANDLE, false);
    }

    private onClickRoute(route: string): void {
        const {history} = this.props;
        history.push({pathname: route});
    }

    private items(): React.ReactNode {
        const {t} = this.props;
        const routes: IRouteItem[] = [
            {key: RoutePage.HOME, icon: 'fas fa-home', title: 'item.home'},
            {key: RoutePage.PROFILE, icon: 'fas fa-id-card', title: 'item.profile'},
            {key: RoutePage.SETTING, icon: 'fas fa-user-cog', title: 'item.setting'},
        ];

        return <List>
            {routes.map(value => {
                return <ListItem key={value.key} onClick={this.onClickRoute.bind(this, value.key)}
                                 selected={this.isCurrentRoute(value.key)}
                                 button={true}>
                    <ListItemIcon>
                        <Icon className={value.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={t(value.title)}/>
                </ListItem>
            })}
        </List>
    }

    render() {
        const {classes, drawerIsOpened, t} = this.props
        return <Drawer variant="permanent" className={clsx(classes.root, {
            [classes.opened]: drawerIsOpened,
            [classes.closed]: !drawerIsOpened,
        })} classes={{
            paper: clsx({
                [classes.opened]: drawerIsOpened,
                [classes.closed]: !drawerIsOpened,
            })
        }}>
            <div className={classes.contentTop}>
                <Tooltip title={t('description.drawerMenuHide')} placement="bottom-end">
                    <IconButton edge="end" onClick={this.handleDrawer}>
                        <Icon className={'fas fa-chevron-left'}/>
                    </IconButton>
                </Tooltip>
            </div>
            <Divider/>
            {this.items()}
        </Drawer>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {
    drawerIsOpened: boolean;
}

interface IState {
}

export default withTracker(() => {
    return {
        drawerIsOpened: Session.get(SessionKeys.DRAWER_HANDLE)
    }
})(DrawerComponent);