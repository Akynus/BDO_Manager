import {createStyles, Theme} from '@material-ui/core/styles';
import {URLBackground} from "/client/resources/GlobalVars";

const styles = (theme: Theme) => createStyles({
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
});

export default styles;