import * as React from "react";
import Character from "/imports/models/Character";
import {Card, CardActionArea, Grid, Icon, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        height: 400
    },
    iconSelect: {
        fontSize: theme.typography.pxToRem(55),
        color: theme.palette.text.secondary,
        textAlign: 'center',
    }
}));
//</editor-folder>

export default function ProfileCharacterCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();

    if (!props.character) return <Card elevation={10} className={classes.root}>
        <CardActionArea className={classes.root} onClick={props.onChose}>
            <Grid spacing={3} container={true} direction="column" justify="center" alignItems="center">
                <Grid item={true}>
                    <Icon className={clsx(['fas fa-male', classes.iconSelect])}/>
                </Grid>
                <Grid item={true}>
                    <Typography variant="subtitle2" color={"secondary"}>
                        {'Clique para selecionar seu personagem principal'}
                    </Typography>
                </Grid>
            </Grid>
        </CardActionArea>
    </Card>

    return <Card elevation={10} className={classes.root}>

    </Card>
}

interface IProps {
    character?: Character;
    onChose: () => void;
}