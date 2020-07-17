import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    content: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: "row",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        },
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.default
    },
    iconTab: {
        minWidth: "auto",
        marginRight: theme.spacing(1)
    },
    form: {
        flex: "auto"
    },
    dialogContentColorPalette: {
        padding: 0
    },
    colorPalette: {
        background: 'transparent',
        boxShadow: "none"
    }
});

export default styles;