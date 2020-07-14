import {createStyles, Theme} from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    root: {
        background: "none",
        marginTop: 64,
        padding: theme.spacing(2),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        width: `calc(100vw - ${drawerWidth}px)`,
        height: 'calc(100vh - 64px)',
        overflowY: 'hidden',
        marginLeft: drawerWidth
    },
    expanded: {
        marginLeft: theme.spacing(9) + 1,
        width: `calc(100vw - ${theme.spacing(9) + 1}px)`,
    }
});

export default styles;