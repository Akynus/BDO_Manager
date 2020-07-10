import * as React from "react";
import {WithStyles} from "@material-ui/core";
import style from "./style";

import BackgroundLogin from "client/components/layout/BackgroundLogin";
import LoginForm from "client/components/form/LoginForm";


export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <BackgroundLogin>
            <LoginForm/>
        </BackgroundLogin>;
    }
}

interface IProps extends WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {

}