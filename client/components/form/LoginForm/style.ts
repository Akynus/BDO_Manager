import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {},
    content: {
        width: 300,
        padding: theme.spacing(3),
        paddingTop: theme.spacing(10),
    },
    icon: {
        color: theme.palette.secondary.main
    },
    titleCard: {
        marginBottom: theme.spacing(0)
    }
});

export default styles;