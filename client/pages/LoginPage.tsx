import * as React from "react";
import {Grid} from "@material-ui/core";
import BackgroundLogin from "/client/components/layout/login/BackgroundLogin";
import ContainerLogin from "/client/components/layout/login/ContainerLogin";

export default function LoginPage(): React.ReactElement {
    return <BackgroundLogin>
        <Grid container={true} justify={"center"} alignItems={"center"}>
            <Grid item={true}>
                <ContainerLogin/>
            </Grid>
        </Grid>
    </BackgroundLogin>
}