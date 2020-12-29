import * as React from "react";
import Character from "/imports/models/Character";
import {TransitionProps} from "@material-ui/core/transitions";
import {Container, Dialog, Fade, Grid} from "@material-ui/core";
import EClasses from "/imports/enumerables/EClasses";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ClassContext from "/imports/objects/ClassContext";
import CharacterClassSelector from "/client/components/layout/character/CharacterClassSelector";

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
        overflow: 'auto'
    }
}), {classNamePrefix: 'character-view'});
//</editor-folder>

const CharacterForm = React.forwardRef<CharacterFormRef, IProps>((props, ref) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    const [currentClass, setCurrentClass] = React.useState<EClasses>(EClasses.WARRIOR);
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
            <Container>
                <Grid container={true} spacing={4}>
                    <Grid item={true} sm={4} xs={12}>
                        <CharacterClassSelector current={currentClass} onChange={setCurrentClass}/>
                    </Grid>
                    <Grid item={true} sm={8} xs={12}>Test</Grid>
                </Grid>
            </Container>

        </div>
    </Dialog>
});

interface IProps {

}

export default CharacterForm;