import * as React from "react";
import {WithStyles} from "@material-ui/core";
import style from "./style";

import AppBar from "/client/components/layout/AppBar";
import DrawerMenu from "/client/components/layout/DrawerMenu";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <div>
            <AppBar/>
            <DrawerMenu/>
        </div>;
    }
}

interface IProps extends WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {

}