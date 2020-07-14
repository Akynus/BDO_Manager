import * as React from "react";
import {WithStyles} from "@material-ui/core";
import style from "./style";

import AppBar from "/client/components/layout/AppBar";
import DrawerMenu from "/client/components/layout/DrawerMenu";
import BodyContent from "/client/components/layout/BodyContent";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const {children, classes} = this.props;
        return <div className={classes.root}>
            <AppBar/>
            <DrawerMenu/>
            <BodyContent>
                {children}
            </BodyContent>
        </div>;
    }
}

interface IProps extends WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {

}