import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    content: {
        marginTop: theme.spacing(2),
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    boxFlex: {
        width: '100%',
        height: '100%',
        display: "flex"
    },
    boxList: {
        width: 300,
        height: '100%',
        borderRight: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.default,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down('md')]: {
            width: 200,
        },
    },
    boxListActions: {
        padding: theme.spacing(1)
    },
    boxContent: {
        flexGrow: 1,
    },
    smallAvatar: {
        width: 20,
        height: 20,
        border: `2px solid ${theme.palette.background.paper}`,
    },
});

export default styles;