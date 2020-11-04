import * as React from "react";
import Character from "/imports/models/Character";
import EClasses from "/imports/enumerables/EClasses";
import ICharacterClass from "/imports/interfaces/ICharacterClass";
import ClassContext from "/imports/objects/ClassContext";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {TabContext, TabPanel} from "@material-ui/lab";
import {
    Avatar, Box,
    Card, CardContent, CardHeader,
    Grid,
    Grow,
    Hidden,
    Icon,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Slide,
    Tooltip, Typography,
    Zoom
} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {red} from "@material-ui/core/colors";
import HorseMiniCard from "/client/components/layout/HorseMiniCard";
import Horses from "/imports/collections/HorseCollection";
import RenownScoreTable from "/client/components/layout/character/RenownScoreTable";
import {getRenownScore} from "/imports/utils/Helpers";

const useStyles = makeStyles((theme: Theme) => createStyles({
    tabPanel: {
        padding: 0
    },
    avatarLevel: {
        background: theme.palette.secondary.main,
        color:theme.palette.getContrastText(theme.palette.secondary.main)
    },
    contentImg: {
        width: 600,
        paddingRight: theme.spacing(2)
    },
    cardImg: {
        height: 364
    },
    paddingTop: {
        paddingTop: theme.spacing(2)
    },
    alignMiddle: {
        display: 'flex',
        alignItems: 'center'
    },
    containerInfo: {
        height: 'min-content',
        '& > :not(:last-child)': {
            paddingBottom: theme.spacing(2)
        },
        '& > :last-child': {
            paddingBottom: 0
        }
    },
    zeroPaddingRight: {},
    classImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    deleteButton: {
        color: red["500"]
    }
}), {classNamePrefix: 'character-view'});

export default function CharacterView(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();

    function classType(classKey: EClasses): ICharacterClass {
        return ClassContext[classKey];
    }

    function imgClass(src: string): React.ReactNode {
        return <img className={classes.classImg} src={src}/>
    }

    function actionButtons(item: Character): React.ReactNode {
        return <Grid container={true} spacing={1}>
            <Grid item={true} xs={6}>
                <Tooltip placement={"top"} title={String(t('action.edit'))}>
                    <IconButton onClick={() => props.onEdit(item)} aria-label="edit">
                        <Icon className={'mdi mdi-pencil'}/>
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item={true} xs={6}>
                <Tooltip placement={"top"} title={String(t('action.delete'))}>
                    <IconButton onClick={() => props.onDelete(item)} className={classes.deleteButton}
                                aria-label="delete">
                        <Icon className={'mdi mdi-delete'}/>
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    }

    function horseItem(item: Character): React.ReactNode {
        const horse = Horses.findOne(item.horse);

        if (horse) {
            return <Grow in={true}>
                <HorseMiniCard horse={horse}/>
            </Grow>
        } else {
            return undefined;
        }


    }

    function profileContent(item: Character): React.ReactNode {
        return <Grid container={true} spacing={2} direction={"row"}>
            <Grid item={true} xs={12}>
                <Slide timeout={400} direction={"left"} in={true}>
                    <Card elevation={10}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={classes.avatarLevel}>{item.level}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name} secondary={t('field.character')}/>
                            <ListItemSecondaryAction>
                                {actionButtons(item)}
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Card>
                </Slide>
            </Grid>
            <Grid item xs={4}>
                {cardGear('mdi mdi-sword', item.atkPre, t('field.atk_pre'), `+${getRenownScore("AP", item.atkPre)}`)}
            </Grid>
            <Grid item xs={4}>
                {cardGear('mdi mdi-sword-cross', item.atkAwk, t('field.atk_awk'), `+${getRenownScore("AP_AWK", item.atkAwk)}`)}
            </Grid>
            <Grid item xs={4}>
                {cardGear('mdi mdi-shield-half-full', item.defense, t('field.defense'), `${getRenownScore("DP", item.defense)}%`)}
            </Grid>
            <Grid item xs={12} md={8}>
                {horseItem(item)}
            </Grid>
        </Grid>
    }

    function cardGear(icon: string, value: number, label: any, bonus: string): React.ReactNode {
        return <Grow timeout={600} in={true}>
            <Card elevation={10}>
                <CardContent>
                    <Grid spacing={1} direction={"column"} container justify={"space-around"}
                          alignItems={"center"}>
                        <Grid item>
                            <Avatar className={classes.avatarLevel}>
                                <Icon className={icon}/>
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.alignMiddle} align={"center"} variant={"h6"}
                                        component={"span"} noWrap={true}
                                        gutterBottom={false}>
                                {value}
                                <Typography component={"span"} display={"inline"}
                                            variant={"subtitle2"} color={"textSecondary"}
                                            noWrap={true}
                                            gutterBottom={false}>{` (${bonus})`}</Typography>
                            </Typography>

                        </Grid>
                        <Grid item>
                            <Typography variant={"subtitle2"} color={"textSecondary"} noWrap={true}
                                        gutterBottom={false}>{label}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grow>
    }

    function buildItem(item: Character, index: number): React.ReactNode {
        const classObj = classType(item.class);

        return <TabPanel className={classes.tabPanel} key={index} value={String(item._id)}>
            <Box display="flex" flexDirection={'row'}>
                <Hidden smDown={true}>
                    <Box className={classes.contentImg}>
                        <Zoom timeout={500} in={true}>
                            <Card elevation={10} className={classes.cardImg}>
                                {imgClass(classObj.largeImg[item.combat])}
                            </Card>
                        </Zoom>
                    </Box>
                </Hidden>
                <Box flexGrow={1}>
                    {profileContent(item)}
                </Box>
            </Box>
            <Box className={classes.paddingTop}>
                <Grid container spacing={2} alignItems={"center"}>
                    <Grid item xs={12} md={4}>
                        <Card elevation={10}>
                            <CardHeader title={t('field.characters.score_ap')}/>
                            <RenownScoreTable type={"AP"} score={item.atkPre}/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card elevation={10}>
                            <CardHeader title={t('field.characters.score_ap_awk')}/>
                            <RenownScoreTable type={"AP_AWK"} score={item.atkAwk}/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card elevation={10}>
                            <CardHeader title={t('field.characters.score_dp')}/>
                            <RenownScoreTable type={"DP"} score={item.defense}/>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </TabPanel>
    }

    return <TabContext value={String(props.selected)}>
        {props.datasource.map(buildItem)}
    </TabContext>

}

interface IProps {
    onEdit(object: Character): void;
    onDelete(object: Character): void;
    selected?: Mongo.ObjectID | undefined;
    datasource: Character[];
}