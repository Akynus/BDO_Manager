import {createStyles, Theme} from '@material-ui/core/styles';

import {URLBackground} from "client/resources/GlobalVars";

const styles = (theme: Theme) => createStyles({
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
        '&.bg01': {
            backgroundImage: `url(${URLBackground.BG01})`
        },
        '&.bg02': {
            backgroundImage: `url(${URLBackground.BG02})`
        },
        '&.bg03': {
            backgroundImage: `url(${URLBackground.BG03})`
        },
    },
    content: {}
});

export default styles;