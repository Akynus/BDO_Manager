import {createStyles, Theme} from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {},
    content: {
        padding: theme.spacing(2),
    },
    classIntro: {
        background: theme.palette.background.default,
        height: 300
    },
    classForm: {
        background: theme.palette.background.default,
    },
    classIcon: {
        width: 30,
        height: "auto",
    },
    classImg: {
        height: 270,
        objectFit: "cover"
    },
    classIconBrightness: {
        filter: 'contrast(100%) brightness(150%)'
    },
    toggleButton: {
        padding: theme.spacing(0.5),
        width: '100%'
    },
    formPadding: {padding: theme.spacing(2)}
});

export default styles;