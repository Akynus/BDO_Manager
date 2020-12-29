import * as React from "react";
import EClasses from "/imports/enumerables/EClasses";
import {Grid, Paper} from "@material-ui/core";
import {ToggleButton} from "@material-ui/lab";
import ClassContext from "/imports/objects/ClassContext";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(2)
    },
    button: {
        shadow: theme.shadows["2"]
    },
    icon: {
        width: '100%',
        height: 'auto'
    }
}), {classNamePrefix: 'character-class-selector'});

export default function CharacterClassSelector(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();

    function buildItem(value: EClasses): React.ReactNode {
        return <Grid item={true} xs={3}>
            <ToggleButton className={classes.button} selected={value == props.current} onClick={() => onSelect(value)}>
                <img className={classes.icon} src={ClassContext[value].icon}/>
            </ToggleButton>
        </Grid>
    }

    function onSelect(value: EClasses): void {
        props.onChange(value);
    }

    return <Paper elevation={2} className={classes.root}>
        <Grid container={true} spacing={2}>
            {Object.keys(EClasses).map(buildItem)}
        </Grid>
    </Paper>
}

interface IProps {
    current: EClasses;

    onChange(value: EClasses): void;
}