import * as React from "react";
import {Card, CardActionArea, CardMedia} from "@material-ui/core";
import Character from "/imports/models/Character";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ClassContext from "/imports/objects/ClassContext";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    img: {
        objectFit: 'cover'
    }
}), {classNamePrefix: 'character-card-list'});

export default function CharacterCardList(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();

    return <Card className={classes.root}>
        <CardActionArea>
            <CardMedia className={classes.img} component="img" alt={props.character.name} height="200"
                       image={ClassContext[props.character.class].img.small} title={props.character.name}
            />
        </CardActionArea>
    </Card>
}

interface IProps {
    character: Character;
}