import * as React from "react";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import AppBar from "/client/components/main/AppBar";
import AppDrawer from "/client/components/main/AppDrawer";
import AppBody from "/client/components/main/AppBody";
import LoadingBar from "react-top-loading-bar/dist";
import {useSession, useSubscription} from "react-meteor-hooks";
import ESession from "/imports/enumerables/ESession";
import EPublish from "/imports/enumerables/EPublish";

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
    const loadingSetting = useSubscription(EPublish.SETTING);
    const loading = useSession(ESession.LOADING_PAGE);
    const theme = useTheme();

    return <div className={classes.root}>
        {!loadingSetting &&
        <LoadingBar color={theme.palette.secondary.main} transitionTime={300} progress={loading ? 30 : 100}
                    loaderSpeed={500} height={3} shadow={true}/>}
        <AppBar/>
        <AppDrawer/>
        <AppBody>
            {props.children}
        </AppBody>
    </div>;
}

export default AppLayout;