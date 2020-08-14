import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import AppBar from "/client/components/main/AppBar";
import AppDrawer from "/client/components/main/AppDrawer";
import AppBody from "/client/components/main/AppBody";
import LoadingBar from "react-top-loading-bar/dist";
import {useSession} from "react-meteor-hooks";
import ESession from "/imports/enumerables/ESession";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        background: theme.palette.type == "dark" ? '#656666' : '#EEEEEE',
        width: '100vw',
        height: '100vh',
        overflow: "hidden"
    }
}));

const AppLayout: React.FunctionComponent = function (props) {
    const classes = useStyles();
    const loading = useSession(ESession.LOADING_PAGE);

    return <div className={classes.root}>
        <LoadingBar color={"#FFFFFF"} transitionTime={300} progress={loading ? 40 : 100}
                    loaderSpeed={600} height={3} shadow={true}/>
        <AppBar/>
        <AppDrawer/>
        <AppBody>
            {props.children}
        </AppBody>
    </div>;
}

export default AppLayout;