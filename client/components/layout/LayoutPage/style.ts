import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        background: theme.palette.type == "dark" ? '#656666' : '#EEEEEE',
        width: '100vw',
        height: '100vh',
        overflow: "hidden"
    }
});

export default styles;