import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {Button, Card, Container, Divider, Fade, Grid, Typography} from "@material-ui/core";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import {useMongoFetch} from "react-meteor-hooks";
import Horses from "/imports/collections/HorseCollection";
import Horse from "/imports/models/Horse";
import HorseForm, {HorseFormFormRef} from "/client/components/form/HorseForm";
import {Mongo} from "meteor/mongo";
import HorseCard from "/client/components/layout/HorseCard";
import HorseView from "/client/components/layout/HorseView";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    content: {
        position: 'relative',
        marginTop: theme.spacing(2),
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    boxFlex: {
        width: '100%',
        height: '100%',
        display: "flex"
    },
    boxList: {
        width: 300,
        height: '100%',
        borderRight: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.default,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.down('md')]: {
            width: 200,
        },
    },
    boxListActions: {
        padding: theme.spacing(1)
    },
    boxContent: {
        flexGrow: 1,
        maxWidth: 'calc(100% - 300px)'
    }
}));
//</editor-folder>

export default function HorsePage(): React.ReactElement {
    //<editor-folder defaultstate="collapsed" desc="Variables">
    const classes = useStyles();
    const {t} = useTranslation();
    const form = React.createRef<HorseFormFormRef>();
    const [selected, setSelected] = React.useState<Mongo.ObjectID>();
    const horses: Horse[] = useMongoFetch(Horses.find());

    //</editor-folder>

    function onOpenForm(id?: Mongo.ObjectID) {
        form.current!.open(id);
    }

    function content(): React.ReactElement {
        return <div className={classes.boxFlex}>
            <div className={classes.boxList}>
                <div className={classes.boxListActions}>
                    <Grid container={true} spacing={1}>
                        <Grid item={true} xs={12}>
                            <Button onClick={() => onOpenForm()} fullWidth={true} variant={"contained"}
                                    color={"secondary"}>{t('action.insert_horse')}</Button>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"body2"} color={"textSecondary"} align={"right"}>
                                {horses.length}/3 {t('item.horses')}</Typography>
                        </Grid>
                    </Grid>
                </div>
                <Divider/>
                <HorseCard data={horses} selected={selected} onSelect={setSelected}/>
            </div>
            <div className={classes.boxContent}>
                <HorseView current={horses.find(value => value._id == selected)}/>
            </div>
        </div>
    }

    return (<Container maxWidth="lg" className={classes.root}>
        <BreadcrumbPage title={t('item.horses')}/>
        <Card elevation={10} className={classes.content}>
            <Fade timeout={500} in={true}>
                {content()}
            </Fade>
        </Card>
        <HorseForm ref={form}/>
    </Container>)
}