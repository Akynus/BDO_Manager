import * as React from "react";
import {Divider, Drawer, Icon, IconButton, Tooltip, WithStyles} from "@material-ui/core";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";
import {withTracker} from "meteor/react-meteor-data";
import {SessionKeys} from "/client/resources/GlobalVars";
import clsx from "clsx";

class DrawerComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    private handleDrawer():void{
        Session.set(SessionKeys.DRAWER_HANDLE, false);
    }

    render() {
        const {classes, drawerIsOpen, t} = this.props
        return <Drawer variant="permanent" className={clsx(classes.root, {
            [classes.opened]: drawerIsOpen,
            [classes.closed]: !drawerIsOpen,
        })} classes={{
            paper: clsx({
                [classes.opened]: drawerIsOpen,
                [classes.closed]: !drawerIsOpen,
            })
        }}>
            <div className={classes.contentTop}>
                <Tooltip title={t('description.drawerMenuHide')} placement="bottom-end">
                    <IconButton onClick={this.handleDrawer}>
                        <Icon className={'fas fa-chevron-left'}/>
                    </IconButton>
                </Tooltip>
            </div>
            <Divider/>
        </Drawer>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {
    drawerIsOpen: boolean;
}

interface IState {
}

export default withTracker(() => {
    return {
        drawerIsOpen: Session.get(SessionKeys.DRAWER_HANDLE)
    }
})(DrawerComponent);