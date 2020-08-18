import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";
import {useSession} from "react-meteor-hooks";
import ESession from "/imports/enumerables/ESession";

const drawerWidth = 240;
const marginTop = 64;

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'relative',
        background: theme.palette.type == "dark" ? '#656666' : '#EEEEEE',
        marginTop: marginTop,
        height: `calc(100% - ${marginTop}px)`,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        display: 'block',
        padding: theme.spacing(2),
        overflowY: 'auto',
        marginLeft: drawerWidth
    },
    expanded: {
        marginLeft: theme.spacing(9) + 1,
        width: `calc(100vw - ${theme.spacing(9) + 1}px)`,
    }
}));

const AppBody: React.FunctionComponent = function (props) {
    const classes = useStyles();
    const opened = useSession(ESession.DRAWER_OPENED);

    return <div className={clsx(classes.root, {[classes.expanded]: !opened})}>
        {props.children}
    </div>;
}

export default AppBody;