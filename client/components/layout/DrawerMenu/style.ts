import {createStyles, Theme} from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    root: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    opened: {
        width: drawerWidth,

        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    closed: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(9) + 1,
    },
    contentTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 4),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }
});

export default styles;