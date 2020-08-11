import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Backdrop, CircularProgress} from "@material-ui/core";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: theme.zIndex.modal
    },
}));
//</editor-folder>

export default function FixedLoading(): React.ReactElement {
    const classes = useStyles();

    return <Backdrop className={classes.root} open={true}>
        <CircularProgress color={"secondary"} size={50}/>
    </Backdrop>;
}