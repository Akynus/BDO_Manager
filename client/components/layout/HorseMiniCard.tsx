import * as React from "react";
import {Card, Grid, ListItem, ListItemText} from "@material-ui/core";
import Horse from "/imports/models/Horse";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import HorseContext from "/imports/objects/HorseContext";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'relative',
        height: 110
    },
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    gradient: {
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: `linear-gradient(69deg, ${theme.palette.background.default} 25%, rgba(0,0,0,0) 65%)`
    },
    img: {
        width: '100%',
        height: 110,
        objectFit: 'cover'
    }
}));

export default function HorseMiniCard(props: IProps): React.ReactElement<IProps> {
    if (!props.horse) return <div/>;
    const classes = useStyles();
    const {t} = useTranslation();

    function type(): IHorse {
        return HorseContext[props.horse!.type!];
    }

    return <Card elevation={10} className={classes.root} key={String(props.horse._id)}>
        <div className={classes.background}>
            <img width={'100%'} height={'100%'} className={classes.img}
                 src={type().img}/>
        </div>
        <div className={classes.gradient}/>
        <Grid container={true} spacing={2}>
            <Grid item={true} xs={12}>
                <ListItem>
                    <ListItemText primary={props.horse.name} secondary={String(t('field.horse'))}/>
                </ListItem>
            </Grid>
        </Grid>
    </Card>
}

interface IProps {
    horse?: Horse;
}