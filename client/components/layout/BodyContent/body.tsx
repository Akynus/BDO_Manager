import * as React from "react";
import {WithStyles} from "@material-ui/core";
import style from "./style";
import {withTracker} from "meteor/react-meteor-data";
import {SessionKeys} from "/client/resources/GlobalVars";
import clsx from "clsx";

class BodyContent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const {classes, children, drawerIsOpened} = this.props;
        return <div className={clsx(classes.root, {[classes.expanded]: !drawerIsOpened})}>
            {children}
        </div>;
    }
}

interface IProps extends WithStyles<keyof ReturnType<typeof style>> {
    drawerIsOpened: boolean;
}

interface IState {
}

export default withTracker(() => {
    return {
        drawerIsOpened: Session.get(SessionKeys.DRAWER_HANDLE)
    }
})(BodyContent);