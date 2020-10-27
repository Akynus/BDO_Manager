import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@material-ui/lab";
import {Card, CardContent, Chip, Divider, Fade, Grid, Icon, ListItem, ListItemText, Slide} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import Character from "/imports/models/Character";
import ICharacterClass from "/imports/interfaces/ICharacterClass";
import ClassContext from "/imports/objects/ClassContext";
import {countGS} from "/imports/utils/Helpers";
import EClass from "EClass.ts";
import {useTracker} from "react-meteor-hooks";
import Horses from "/imports/collections/HorseCollection";
import Horse from "/imports/models/Horse";
import HorseMiniCard from "/client/components/layout/HorseMiniCard";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100%',
        position: "relative",
        background: theme.palette.background.default
    },
    empty: {
        width: '100%',
        height: '100%',
        background: theme.palette.background.paper
    },
    gradient: {
        top: 0,
        right: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: `linear-gradient(69deg, rgba(0,0,0,0) 25%, ${theme.palette.background.default} 65%)`
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    details: {
        position: 'absolute',
        width: 200,
        top: theme.spacing(2),
        right: theme.spacing(2),
    }
}));

export default function _CharacterView(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();
    const [speedOpen, setSpeedOpen] = React.useState<boolean>(false);
    const horse = useTracker<Horse | undefined>(() => {
        if (!props.current) return;
        return Horses.findOne({_id: props.current.horse});
    }, [props.current]);

    function classCharacter(): ICharacterClass {
        return ClassContext[props.current!.class];
    }

    function onEdit(): void {
        if (props.current && props.onEdit) {
            props.onEdit(props.current);
        }
    }

    function onDelete(): void {
        if (props.current && props.onDelete) {
            props.onDelete(props.current);
        }
    }

    function contentBody(): React.ReactElement {
        return <div className={classes.root}>
            <SpeedDial ariaLabel={'Speed Dial'} open={speedOpen} onClose={() => setSpeedOpen(false)}
                       onOpen={() => setSpeedOpen(true)}
                       icon={<SpeedDialIcon/>}
                       className={classes.speedDial}>
                <SpeedDialAction onClick={onDelete} icon={<Icon color={"error"} className={'mdi mdi-delete'}/>}
                                 title={String(t('action.delete'))}/>
                <SpeedDialAction onClick={onEdit} icon={<Icon className={'mdi mdi-pencil'}/>}
                                 title={String(t('action.edit'))}/>
            </SpeedDial>
            <Fade in={true} timeout={400}>
                <img width={'70%'} height={'100%'} className={classes.img}
                     src={classCharacter().largeImg[props.current!.combat]}/>
            </Fade>
            <div className={classes.gradient}/>
            <div className={classes.details}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12}>
                        <Slide direction={"right"} timeout={400} in={true}>
                            <Card>
                                <ListItem>
                                    <ListItemText primary={props.current!.name} secondary={'Personagem'}/>
                                </ListItem>
                            </Card>
                        </Slide>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Slide direction={"right"} timeout={600} in={true}>
                            <Card>
                                <CardContent>
                                    <Grid container={true} spacing={1}>
                                        <Grid item={true} xs={12}>
                                            <Chip color={"primary"} size={"small"} label={countGS({
                                                atkPre: props.current!.atkPre,
                                                atkAwk: props.current!.atkAwk,
                                                defense: props.current!.defense
                                            }, props.current!.class == EClass.SHAI)}/> {t('field.gear_score')}
                                        </Grid>
                                        <Grid item={true} xs={12}>
                                            <Divider/>
                                        </Grid>
                                        <Grid item={true} xs={12}>
                                            <Chip color={"secondary"} size={"small"}
                                                  label={props.current!.atkPre}/> {t('field.atk_pre')}
                                        </Grid>
                                        {classCharacter().value != EClass.SHAI && <Grid item={true} xs={12}>
                                            <Chip color={"secondary"} size={"small"}
                                                  label={props.current!.atkAwk}/> {t('field.atk_awk')}
                                        </Grid>}
                                        <Grid item={true} xs={12}>
                                            <Chip color={"secondary"} size={"small"}
                                                  label={props.current!.defense}/> {t('field.defense')}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Slide direction={"right"} timeout={800} in={Boolean(horse)}>
                            <div>
                                <HorseMiniCard horse={horse}/>
                            </div>
                        </Slide>
                    </Grid>
                </Grid>
            </div>
        </div>
    }

    function contentEmpty(): React.ReactElement {
        return <div className={classes.root}>
            <div className={classes.empty}/>
        </div>
    }

    return (props.current) ? contentBody() : contentEmpty();
}

interface IProps {
    current?: Character;
    onEdit?: (obj: Character) => void;
    onDelete?: (obj: Character) => void;
}