import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {URLBackground} from "/imports/objects/GlobalVars";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(241, 241, 241, 0.58)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: ' background-image 0.4s ease-in-out',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden',
        '&.bg01': {
            backgroundImage: `url(${URLBackground.BG01})`
        },
        '&.bg02': {
            backgroundImage: `url(${URLBackground.BG02})`
        },
        '&.bg03': {
            backgroundImage: `url(${URLBackground.BG03})`
        },
    }
}));

const BackgroundLogin: React.FunctionComponent = function (props) {
    const classes = useStyles();
    const [background, setBackground] = React.useState<string>("bg01");

    React.useLayoutEffect(() => {
        setInterval(loopBG, 3000);
    }, [])

    function loopBG(): void {
        const values = ["bg01", "bg02", "bg03"];
        const selected = Math.floor(Math.random() * values.length);
        setBackground(values[selected]);
    }

    return <div className={clsx([classes.root, background])}>
        <div>
            {props.children}
        </div>
    </div>
}

export default BackgroundLogin;