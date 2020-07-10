import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {},
    content: {
        width: 300,
    },
    titleCard: {
        marginBottom: theme.spacing(0)
    },
    divider:{
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
});

export default styles;