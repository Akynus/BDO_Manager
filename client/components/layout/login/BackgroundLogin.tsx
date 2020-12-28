import * as React from "react";
import Particles, {IParticlesParams} from 'react-particles-js';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(241, 241, 241, 0.58)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: 'hidden',
        position: "relative"
    },
    background: {
        zIndex: 1,
        top: theme.spacing(-3),
        right: theme.spacing(-3),
        left: theme.spacing(-3),
        bottom: theme.spacing(-3),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('/images/background-login.jpg')",
        filter: `blur(${theme.spacing(2)}px)`,
        position: 'absolute'
    },
    particles: {
        zIndex: 2,
        top: theme.spacing(-3),
        right: theme.spacing(-3),
        left: theme.spacing(-3),
        bottom: theme.spacing(-3),
        position: 'absolute'
    },
    content: {
        zIndex: 3
    }
}), {classNamePrefix: 'background-login'});

const params: IParticlesParams = {
    particles: {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    }
};

const BackgroundLogin: React.FunctionComponent = function (props) {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.background}/>
        <div className={classes.particles}>
            <Particles params={params}/>
        </div>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

export default BackgroundLogin;