import * as React from "react";
import {Grid, Slide, WithStyles, Zoom} from "@material-ui/core";
import style from "./style";

import BackgroundLogin from "/client/components/layout/BackgroundLogin";
import LoginForm from "/client/components/form/LoginForm";
import AboutLogin from "/client/components/layout/AboutLogin";


export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            show: false
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({show: true}), 700);
    }

    render() {
        const {show} = this.state;
        return <BackgroundLogin>
            <Grid container={true} spacing={2} justify={"space-between"} alignItems={"center"}>
                <Grid item={true}>
                    <Zoom in={show} timeout={300}>
                        <div>
                            <AboutLogin/>
                        </div>
                    </Zoom>
                </Grid>
                <Grid item={true}>
                    <Slide direction="up" in={show} mountOnEnter={true} unmountOnExit={true} timeout={300}>
                        <div>
                            <LoginForm/>
                        </div>
                    </Slide>
                </Grid>
            </Grid>
        </BackgroundLogin>;
    }
}

interface IProps extends WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
    show: boolean;
}