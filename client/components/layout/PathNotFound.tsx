import * as React from "react";
import {Box} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100%'
    }
}), {classNamePrefix: 'path-not-found'});

export default function PathNotFound(): React.ReactElement {
    const classes = useStyles();

    return <Box className={classes.root}>
        Path Not Found
    </Box>
}