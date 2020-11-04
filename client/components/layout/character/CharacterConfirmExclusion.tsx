import * as React from "react";
import Character from "/imports/models/Character";
import {
    Avatar,
    Button, Card, CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Fade,
    Grid,
    ListItem, ListItemAvatar, ListItemText
} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import ICharacterClass from "/imports/interfaces/ICharacterClass";
import ClassContext from "/imports/objects/ClassContext";
import EClasses from "/imports/enumerables/EClasses";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {TransitionProps} from "@material-ui/core/transitions";

//<editor-folder defaultstate="collapsed" desc="Styles">
const TransitionDialog = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) => createStyles({
    img: {
        height: 100
    },
    avatar: {
        background: theme.palette.secondary.main,
        color: theme.palette.getContrastText(theme.palette.secondary.main)
    },
    deleteButton: {
        color: red["500"]
    }
}), {classNamePrefix: 'confirm-character-delete'});
//</editor-folder>

export type CharacterConfirmExclusionRef = {
    open(object: Character): void;
}

const CharacterConfirmExclusion = React.forwardRef<CharacterConfirmExclusionRef, IProps>((props, ref) => {
    React.useImperativeHandle(ref, () => ({
        open: onOpen,
    }));

    //<editor-folder defaultstate="collapsed" desc="Variables">
    const classes = useStyles();
    const [visible, setVisible] = React.useState<boolean>(false);
    const [current, setCurrent] = React.useState<Character>(new Character());
    const {t} = useTranslation();

    //</editor-folder>

    function onOpen(object: Character): void {
        setCurrent(object);
        setVisible(true);
    }

    function onClose(): void {
        setVisible(false);
        setTimeout(() => setCurrent(new Character()), 300);
    }

    function onSubmit(): void {
        props.onConfirm(current);
        onClose();
    }

    function getClass(): ICharacterClass {
        return ClassContext[current.class] || ClassContext[EClasses.WARRIOR];
    }

    return <Dialog TransitionComponent={TransitionDialog} maxWidth={"sm"} fullWidth={true} open={visible} onClose={onClose}>
        <DialogTitle>{t('title.character_remove')}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {t('description.character_remove')}
            </DialogContentText>
            <Grid spacing={2} container={true}>
                <Grid item={true} xs={4}>
                    <Card elevation={2}>
                        <CardMedia className={classes.img} image={getClass().smallImg[current.combat]}/>
                    </Card>
                </Grid>
                <Grid item={true} xs={8}>
                    <Card elevation={2}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>{current.level}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={current.name} secondary={t(getClass().name)}/>
                        </ListItem>
                    </Card>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
                {t('action.cancel')}
            </Button>
            <Button onClick={onSubmit} className={classes.deleteButton}>
                {t('action.delete')}
            </Button>
        </DialogActions>
    </Dialog>
});

interface IProps {
    onConfirm(object: Character): void;
}

export default CharacterConfirmExclusion;