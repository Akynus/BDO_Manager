import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Card, CardContent, CardMedia, Divider, Grid, Tooltip, Typography} from "@material-ui/core";
import ClassContext from "/imports/objects/ClassContext";
import {ToggleButton} from "@material-ui/lab";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import EClass from "/imports/enumerables/EClass";
import ECharacterCombat from "/imports/enumerables/ECharacterCombat";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        background: theme.palette.background.default,
    },
    img: {
        height: 270,
        objectFit: "cover"
    },
    icon: {
        width: 25,
        height: "auto",
    },
    button: {
        padding: theme.spacing(0.5),
        width: '100%'
    },
    brightness: {
        filter: 'contrast(100%) brightness(150%)'
    },
}), {classNamePrefix: 'class-selector'});
//</editor-folder>

export default function ClassSelect(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();

    function imgClass(): string {
        if (ClassContext[props.value].smallImg) {
            return ClassContext[props.value].smallImg![props.combat];
        } else {
            return String();
        }
    }

    function onSelect(value: string): void {
        const selected = ClassContext[value].value;
        props.onChange(selected);
    }

    function cardButton(value:string):React.ReactNode{
        return <Grid key={ClassContext[value].value} item={true} xs={2}>
            <Tooltip title={String(t(ClassContext[value].name))} placement={"top"}>
                <ToggleButton onClick={() => onSelect(value)}
                              className={classes.button} value={ClassContext[value].value}
                              selected={props.value == ClassContext[value].value}>
                    <img className={clsx([classes.icon, classes.brightness])}
                         src={ClassContext[value].icon}/>
                </ToggleButton>
            </Tooltip>
        </Grid>
    }

    return <Card className={classes.root}>
        <CardMedia className={classes.img} image={imgClass()} title={String(t(ClassContext[props.value].name))}/>
        <CardContent>
            <Grid container={true} spacing={1}>
                <Grid item={true} xs={12}>
                    <Typography variant={"subtitle2"}>{t('description.choseYourClass')}</Typography>
                    <Divider/>
                </Grid>
                <Grid item={true} container={true} spacing={1} xs={12}>
                    {Object.keys(ClassContext).map(cardButton)}
                </Grid>
            </Grid>
        </CardContent>
    </Card>
}

interface IProps {
    value: EClass;
    combat: ECharacterCombat;
    onChange: (value: EClass) => void;
}