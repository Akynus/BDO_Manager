import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {URLBackground} from "/imports/objects/GlobalVars";
import {Card} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        zIndex: 0,
        width: 500,
        height: 400,
        marginRight: -theme.spacing(5),
        padding: theme.spacing(5),
        backgroundColor: 'rgba(241, 241, 241, 0.58)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${URLBackground.ABOUT_LOGIN})`,
        backgroundPosition: "center"
    },
}));

const AboutLogin: React.FunctionComponent = function (props) {
    const classes = useStyles();
    return <Card className={classes.root}/>;
}

export default AboutLogin;