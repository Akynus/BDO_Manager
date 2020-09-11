import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@material-ui/lab";
import {Card, CardContent, Chip, Fade, Grid, Icon, ListItem, ListItemText, Slide} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import Horse from "/imports/models/Horse";
import HorseContext from "/imports/objects/HorseContext";
import clsx from "clsx";
import {green, yellow} from "@material-ui/core/colors";

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
        width: 250,
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
    iconSize: {
        fontSize: theme.typography.subtitle1.fontSize,
        marginRight: theme.spacing(1)
    },
    yellowIcon: {
        color: yellow.A200
    },
    greenIcon: {
        color: green.A200
    }
}));

export default function HorseView(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();
    const [speedOpen, setSpeedOpen] = React.useState<boolean>(false);

    function horseType(): IHorse {
        return HorseContext[props.current!.type];
    }

    function onEdit(): void {
        if (props.current && props.onEdit) {
            props.onEdit(props.current._id);
        }
    }

    function onDelete(): void {
        if (props.current && props.onDelete) {
            props.onDelete(props.current);
        }
    }

    function isDreamHorse(): React.ReactNode {
        return <Grid container={true} item={true} xs={12} alignItems={"center"}>
            <Icon
                className={clsx(['mdi mdi-star', classes.iconSize, classes.yellowIcon])}/> {t('description.dream_horse')}
        </Grid>
    }

    function hasKrogdale(): React.ReactNode {
        return <Grid container={true} item={true} xs={12} alignItems={"center"}>
            <Icon
                className={clsx(['mdi mdi-shield', classes.iconSize, classes.greenIcon])}/> {t('description.has_krodale')}
        </Grid>
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
                     src={horseType().img}/>
            </Fade>
            <div className={classes.gradient}/>
            <div className={classes.details}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12}>
                        <Slide direction={"right"} timeout={400} in={true}>
                            <Card>
                                <ListItem>
                                    <ListItemText primary={props.current!.name} secondary={t(horseType().name)}/>
                                </ListItem>
                            </Card>
                        </Slide>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Slide direction={"right"} timeout={{enter: 600}} in={true}>
                            <Card>
                                <CardContent>
                                    <Grid container={true} spacing={1}>
                                        <Grid item={true} xs={12}>
                                            <Chip color={"secondary"} size={"small"}
                                                  label={props.current!.speed}/> {t('field.speed')}
                                        </Grid>
                                        <Grid item={true} xs={12}>
                                            <Chip color={"secondary"} size={"small"}
                                                  label={props.current!.accel}/> {t('field.accel')}
                                        </Grid>
                                        <Grid item={true} xs={12}>
                                            <Chip color={"secondary"} size={"small"}
                                                  label={props.current!.brake}/> {t('field.brake')}
                                        </Grid>
                                        <Grid item={true} xs={12}>
                                            <Chip color={"secondary"} size={"small"}
                                                  label={props.current!.turn}/> {t('field.turn')}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Slide>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Slide direction={"right"} timeout={{enter: 800}} in={(horseType().isDreamHorse || props.current!.krogdalo)}>
                            <Card>
                                <CardContent>
                                    <Grid container={true} spacing={1}>
                                        {horseType().isDreamHorse && isDreamHorse()}
                                        {props.current!.krogdalo && hasKrogdale()}
                                    </Grid>
                                </CardContent>
                            </Card>
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
    current?: Horse;
    onEdit?: (obj: Mongo.ObjectID) => void;
    onDelete?: (obj: Horse) => void;
}