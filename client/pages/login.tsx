import * as React from "react";
import Background_base from "/client/components/background_base";
import LoginBase from "/client/components/login_base";

export default class LoginPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return <div>
            <Background_base/>
            <LoginBase/>
        </div>;
    }
}

interface IProps {
}

interface IState {
}