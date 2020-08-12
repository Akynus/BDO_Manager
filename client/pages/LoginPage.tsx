import * as React from "react";
import {Grid, Slide, Zoom} from "@material-ui/core";
import BackgroundLogin from "/client/components/layout/BackgroundLogin";
import AboutLogin from "/client/components/layout/AboutLogin";
import LoginForm from "/client/components/form/LoginForm";

export default function LoginPage(): React.ReactElement {
    const [show, setShow] = React.useState<boolean>(false);

    React.useLayoutEffect(() => setTimeout(()=>setShow(true), 500), []);

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
    </BackgroundLogin>
}