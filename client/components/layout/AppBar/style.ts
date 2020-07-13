import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    toolbar: {
        display: 'flex'
    },
    title: {
        display: 'none',
        marginLeft: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    iconMenuItem: {
        width: 'auto'
    },
    sectionMobile: {
        display: 'none',
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
});

export default styles;