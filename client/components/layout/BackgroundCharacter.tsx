import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@material-ui/lab";
import {Icon} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100%',
        position: "relative",
        background: theme.palette.background.default
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
    }
}));

export default function BackgroundCharacter(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();
    const [speedOpen, setSpeedOpen] = React.useState<boolean>(false);

    return (<div className={classes.root}>
        <SpeedDial ariaLabel={'Speed Dial'} open={speedOpen} onClose={() => setSpeedOpen(false)}
                   onOpen={() => setSpeedOpen(true)}
                   icon={<SpeedDialIcon/>}
                   className={classes.speedDial}>
            <SpeedDialAction icon={<Icon color={"error"} className={'fas fa-trash-alt'}/>} title={String(t('action.delete'))}/>
            <SpeedDialAction icon={<Icon className={'fas fa-edit'}/>} title={String(t('action.edit'))}/>
        </SpeedDial>


        <img width={'70%'} height={'100%'} className={classes.img}
             src={"https://s1.pearlcdn.com/SEA/contents/img/portal/gameinfo/class28_awaken_thumb_img_1.jpg"}/>
        <div className={classes.gradient}/>
    </div>)
}

interface IProps {

}