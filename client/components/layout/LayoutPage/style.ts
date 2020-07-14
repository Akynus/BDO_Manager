import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        background: theme.palette.background.default,
        width: '100vw',
        height: '100vh',
        overflow: "hidden"
    }
});

export default styles;