import * as React from "react";
import {Grid, Slide, Zoom} from "@material-ui/core";
import BackgroundLogin from "/client/components/layout/BackgroundLogin";

export default function LoginPage():React.ReactElement{
    return <BackgroundLogin>
        <Grid container={true} spacing={2} justify={"space-between"} alignItems={"center"}>
            <Grid item={true}>
                <Zoom in={true} timeout={300}>
                    <div>
                        Test
                    </div>
                </Zoom>
            </Grid>
            <Grid item={true}>
                <Slide direction="up" in={true} mountOnEnter={true} unmountOnExit={true} timeout={300}>
                    <div>
                        Test
                    </div>
                </Slide>
            </Grid>
        </Grid>
    </BackgroundLogin>
}