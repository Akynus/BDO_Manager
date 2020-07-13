import * as React from "react";
import {Card, WithStyles} from "@material-ui/core";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }


    render() {
        const {classes} = this.props;
        return <Card className={classes.root}/>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
}