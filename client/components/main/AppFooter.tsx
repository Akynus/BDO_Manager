import * as React from "react";
import {Paper} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useSession} from "react-meteor-hooks";
import ESession from "/imports/enumerables/ESession";
import clsx from "clsx";

const drawerWidth = 240;
const heightFooter= 80;

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    footer: {
        height: heightFooter,
        position: 'absolute',
        bottom: 0,
        left: 72,
        right: 0
    },
    expanded: {
        left: drawerWidth
    }
}));
//</editor-folder>

export default function AppFooter(): React.ReactElement {
    const classes = useStyles();
    const opened = useSession(ESession.DRAWER_OPENED);

    return <Paper className={clsx([classes.footer, {[classes.expanded]: opened}])} elevation={1}>
        FOOTER BAR
    </Paper>
}