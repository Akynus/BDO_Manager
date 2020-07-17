import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        background: theme.palette.background.default
    },
    input: {
        flex: 1,
        marginLeft: theme.spacing(1),
        '& input': {
            height: '100%'
        }
    },
    iconSearch: {
        color: theme.palette.text.disabled,
        marginRight: theme.spacing(1)
    },
});

export default styles;