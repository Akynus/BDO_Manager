import * as React from "react";
import {
    Avatar,
    Card,
    CardActionArea,
    CardMedia,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Slide, Typography
} from "@material-ui/core";
import Character from "/imports/models/Character";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ClassContext from "/imports/objects/ClassContext";
import clsx from "clsx";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        position: 'relative'
    },
    focus: {
        filter: 'saturate(50%) grayscale(50%)',
        transform: 'scale(1.3)'
    },
    img: {
        userSelect: 'none',
        transition: 'transform 500ms ease-in-out'
    },
    description: {
        position: 'absolute',
        bottom: theme.spacing(1),
        left: theme.spacing(1),
        right: theme.spacing(1)
    },
    avatar: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        background: theme.palette.secondary.main,
        width: theme.spacing(4),
        height: theme.spacing(4),
    }
}), {classNamePrefix: 'character-card-list'});

export default function CharacterCard(props: IProps): React.ReactElement<IProps> {
    const [focus, setFocus] = React.useState<boolean>(false);
    const classes = useStyles();
    const {t} = useTranslation();

    return <Card className={classes.root} onMouseOver={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
        <CardActionArea onClick={props.onClick}>
            <CardMedia className={clsx(classes.img, {
                [classes.focus]: focus
            })} draggable={false} component="img"
                       alt={props.character.name} height="300"
                       image={ClassContext[props.character.class].img.small}/>
            <Slide direction={"up"} timeout={500} in={focus}>
                <Card className={classes.description}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <Typography>{props.character.level}</Typography>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={props.character.name}
                                      secondary={t(ClassContext[props.character.class].name)}/>
                    </ListItem>
                </Card>
            </Slide>
        </CardActionArea>
    </Card>
}

interface IProps {
    character: Character;

    onClick(): void;
}