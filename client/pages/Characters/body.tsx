import * as React from "react";
import {WithStyles} from "@material-ui/core";
import style from "./style";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <div>
            Characters
        </div>;
    }
}

interface IProps extends WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {

}