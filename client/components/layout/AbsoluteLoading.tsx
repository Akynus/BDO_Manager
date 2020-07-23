import * as React from "react";
import {Backdrop, CircularProgress} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: "absolute",
        zIndex: theme.zIndex.drawer
    }
}));

export default function AbsoluteLoading(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    return (<Backdrop className={classes.root} open={props.loading}>
        <CircularProgress color={"secondary"} size={50}/>
    </Backdrop>);
}

interface IProps {
    loading: boolean;
}