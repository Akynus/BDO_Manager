import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        zIndex: 1,
        width: 350,
        position: "relative",
    },
    content: {
        width: 350,
        padding: theme.spacing(3),
    },
    icon: {
        color: theme.palette.secondary.main
    },
    titleCard: {
        marginBottom: theme.spacing(2),
    },
    loading: {
        position: "absolute",
        zIndex: theme.zIndex.drawer
    }
});

export default styles;