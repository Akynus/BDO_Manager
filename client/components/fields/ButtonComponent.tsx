import * as React from "react";
import {Button, CircularProgress, PropTypes} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    progress: {
        marginRight: theme.spacing(2),
        color: theme.palette.getContrastText(theme.palette.primary.main)
    }
}), {classNamePrefix: 'button-component'});
//</editor-folder>

const ButtonComponent: React.FunctionComponent<IProps> = props => {
    const classes = useStyles();

    return <Button {...props}>
        {props.loading && <CircularProgress className={classes.progress} size={24}/>}
        {props.children}
    </Button>
}

interface IProps {
    variant?: 'text' | 'outlined' | 'contained';
    color?: PropTypes.Color;
    onClick?: React.MouseEventHandler<any>;
    loading?: boolean;
}

export default ButtonComponent;