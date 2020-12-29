import * as React from "react";
import Character from "/imports/models/Character";
import {TransitionProps} from "@material-ui/core/transitions";
import {Button, Dialog, Fade, Icon} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ClassContext from "/imports/objects/ClassContext";
import {useTranslation} from "react-i18next";
import {red} from "@material-ui/core/colors";

export interface CharacterViewRef {
    open(character: Character): void;
}

//<editor-folder desc="collapsed" desc="Styles">
const TransitionDialog = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '15%'
    },
    closeBtn: {
        position: 'absolute',
        background: red[400],
        color: theme.palette.getContrastText(red[400]),
        top: theme.spacing(4),
        left: theme.spacing(4)
    }
}), {classNamePrefix: 'character-view'});
//</editor-folder>

const CharacterView = React.forwardRef<CharacterViewRef, IProps>((props, ref) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [current, setCurrent] = React.useState<Character | undefined>();
    const classes = useStyles();
    const {t} = useTranslation();
    React.useImperativeHandle(ref, () => ({open: onOpen}));

    function onOpen(character?: Character): void {
        setOpen(true);
        setCurrent(character);
    }

    function onClose(): void {
        setOpen(false);
        setTimeout(() => setCurrent(undefined), 300);
    }

    function content(): React.ReactNode {
        return <div className={classes.root}>
            <img alt={current!.name} className={classes.background} src={ClassContext[current!.class].img.large}/>
            <Button className={classes.closeBtn} onClick={onClose}
                    startIcon={<Icon className={'mdi mdi-close'}/>}>{t('action.close')}</Button>
        </div>
    }

    return <Dialog onClose={onClose} disableEnforceFocus={true} keepMounted={true} open={open}
                   fullScreen={true} TransitionComponent={TransitionDialog}>
        {current && content()}
    </Dialog>
});

interface IProps {
    onEdit(character: Character): void;

    onDelete(character: Character): void;
}

export default CharacterView;