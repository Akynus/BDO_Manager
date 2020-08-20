import * as React from "react";
import {Avatar, Card, CardActionArea, Chip} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ClassContext from "/imports/objects/ClassContext";
import ICharacterClass from "/imports/interfaces/ICharacterClass";
import Character from "/imports/models/Character";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        position: 'relative',
        width: '100%',
        height: 170,
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
        height: '100%',
        objectFit: 'cover'
    },
    chip: {
        position: 'absolute',
        bottom: theme.spacing(1),
        left: theme.spacing(1),
    }
}));

export default function CharacterMiniCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();

    function type(): ICharacterClass {
        return ClassContext[props.data.class];
    }

    return <Card className={classes.root} key={String(props.data._id)}>
        <CardActionArea className={classes.root} onClick={props.onSelect}>
            <div className={classes.background}>
                <img width={'100%'} height={'100%'} className={classes.img} src={type().smallImg[props.data.combat]}/>
            </div>
            <div className={classes.gradient}/>
            <Chip className={classes.chip} color="secondary"
                  avatar={<Avatar>{props.data.level}</Avatar>} label={props.data.name}/>
        </CardActionArea>
    </Card>
}

interface IProps {
    data: Character;
    onSelect: () => void;
}