import * as React from "react";
import Character from "/imports/models/Character";
import {TransitionProps} from "@material-ui/core/transitions";
import {Button, Card, Container, Dialog, Fade, Grid, Icon, Paper} from "@material-ui/core";
import EClasses from "/imports/enumerables/EClasses";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ClassContext from "/imports/objects/ClassContext";
import CharacterClassSelector from "/client/components/layout/character/CharacterClassSelector";
import TitlesPage from "/client/components/layout/generic/TitlesPage";
import {red} from "@material-ui/core/colors";
import {useTranslation} from "react-i18next";

export interface CharacterFormRef {
    open(character?: Character): void;
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
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'fixed',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '15%'
    },
    container: {
        marginTop: theme.spacing(2)
    },
    closeBtn: {
        background: red[400],
        color: theme.palette.getContrastText(red[400]),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2)
    }
}), {classNamePrefix: 'character-view'});
//</editor-folder>

const CharacterForm = React.forwardRef<CharacterFormRef, IProps>((props, ref) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    const [currentClass, setCurrentClass] = React.useState<EClasses>(EClasses.WARRIOR);
    const {t} = useTranslation();
    React.useImperativeHandle(ref, () => ({open: onOpen}));

    function onOpen(character?: Character): void {
        setOpen(true);
    }

    function onClose(): void {
        setOpen(false);
        setTimeout(() => reset(), 1000);
    }

    function reset(): void {
        setCurrentClass(EClasses.WARRIOR);
    }

    function contentBackground(): React.ReactNode {
        return <React.Fragment>
            {Object.keys(EClasses).map(value => <Fade timeout={1000} in={value == currentClass}>
                <div className={classes.background} style={{backgroundImage: `url(${ClassContext[value].img.large})`}}/>
            </Fade>)}
        </React.Fragment>
    }

    return <Dialog onClose={onClose} disableEnforceFocus={true} keepMounted={true} open={open}
                   fullScreen={true} TransitionComponent={TransitionDialog}>
        {contentBackground()}
        <div className={classes.root}>
            <Container maxWidth={"md"} className={classes.container}>
                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12}>
                        <Card>
                            <TitlesPage title={'Formulário'} icon={'mdi mdi-newspaper-variant'}
                                        itemAction={<Button size={"small"} className={classes.closeBtn}
                                                            onClick={onClose}
                                                            startIcon={<Icon
                                                                className={'mdi mdi-close'}/>}>{t('action.close')}</Button>}/>
                        </Card>
                    </Grid>
                    <Grid item={true} md={4} sm={12} xs={12}>
                        <CharacterClassSelector current={currentClass} onChange={setCurrentClass}/>
                    </Grid>
                    <Grid item={true} md={8} sm={12} xs={12}>
                        <Paper elevation={2} className={classes.paper}>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </div>
    </Dialog>
});

interface IProps {

}

export default CharacterForm;