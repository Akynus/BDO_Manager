import * as React from "react";
import Character from "/imports/models/Character";
import {
    Avatar,
    Card,
    CardActionArea,
    CardHeader,
    CardMedia,
    Grid,
    Icon,
    IconButton,
    Typography
} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import clsx from "clsx";
import ICharacterClass from "/imports/interfaces/ICharacterClass";
import ClassContext from "/imports/objects/ClassContext";
import {useTranslation} from "react-i18next";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        height: 400,
    },
    flexCard: {
        display: 'flex',
        flexDirection: 'column'
    },
    iconSelect: {
        fontSize: theme.typography.pxToRem(55),
        color: theme.palette.text.secondary,
        textAlign: 'center',
    },
    avatarColor: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
    },
    media: {
        flexGrow: 1
    },
}));
//</editor-folder>

export default function ProfileCharacterCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();

    if (!props.character) return <Card elevation={10} className={classes.root}>
        <CardActionArea className={classes.root} onClick={props.onChose}>
            <Grid spacing={3} container={true} direction="column" justify="center" alignItems="center">
                <Grid item={true}>
                    <Icon className={clsx(['mdi mdi-sword-cross', classes.iconSelect])}/>
                </Grid>
                <Grid item={true}>
                    <Typography variant="subtitle2" color={"secondary"} align={"center"}>
                        {t('description.choose_character')}
                    </Typography>
                </Grid>
            </Grid>
        </CardActionArea>
    </Card>

    function type(): ICharacterClass {
        return ClassContext[props.character!.class];
    }

    return <Card elevation={10} className={clsx([classes.root, classes.flexCard])}>
        <CardHeader avatar={<Avatar className={classes.avatarColor}>{props.character.level}</Avatar>}
                    title={props.character.name} titleTypographyProps={{noWrap: true}}
                    subheader={t('title.main_character')} action={<IconButton onClick={props.onChose}>
            <Icon className={'mdi mdi-repeat'}/>
        </IconButton>}/>
        <CardMedia className={classes.media} title={props.character.name}
                   image={type().largeImg[props.character.combat]}/>
    </Card>
}

interface IProps {
    character?: Character;
    onChose: () => void;
}