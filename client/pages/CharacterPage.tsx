import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Button, Card, Container, Divider, Fade, Grid, Typography} from "@material-ui/core";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import CharacterForm, {CharacterFormRef} from "/client/components/form/CharacterForm";
import {useTranslation} from "react-i18next";
import CharacterCard from "/client/components/layout/CharacterCard";
import DataLoading from "/client/components/layout/DataLoading";
import BackgroundCharacter from "/client/components/layout/BackgroundCharacter";
import EPublish from "/imports/enumerables/EPublish";
import {useMongoFetch, useSubscription} from "react-meteor-hooks";
import Characters from "/imports/collections/CharacterCollection";
import Character from "/imports/models/Character";
import {Mongo} from "meteor/mongo";
import ConfirmExclusionForm, {ConfirmExclusionFormRef} from "/client/components/form/ConfirmExclusionForm";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from "notistack";

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
        display: 'flex',
        flexDirection: 'column',
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

export default function CharacterPage(): React.ReactElement {
    //<editor-folder defaultstate="collapsed" desc="Variables">
    const classes = useStyles();
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();
    const isLoading = useSubscription(EPublish.CHARACTERS);
    const characters = useMongoFetch(Characters.find());
    const [selected, setSelected] = React.useState<Mongo.ObjectID>();
    const form = React.createRef<CharacterFormRef>();
    const confirmExclusion = React.createRef<ConfirmExclusionFormRef>();

    //</editor-folder>

    function onOpenForm(id?: Mongo.ObjectID) {
        form.current!.open(id);
    }

    function onDelete(object: Character) {
        confirmExclusion.current!.open({id: object._id, text: object.name});
    }

    function onConfirmDelete(id: Mongo.ObjectID): void {
        Meteor.call(EMethod.REMOVE_CHARACTER, id, function (error: Error) {
            if (error) return enqueueSnackbar(t('message.error_remove_character'), {variant: "error"});
            setSelected(undefined);
            return enqueueSnackbar(t('message.success_remove_character'), {variant: "success"});
        });
    }

    function content(): React.ReactElement {
        return <div className={classes.boxFlex}>
            <div className={classes.boxList}>
                <div className={classes.boxListActions}>
                    <Grid container={true} spacing={1}>
                        <Grid item={true} xs={12}>
                            <Button onClick={() => onOpenForm()} fullWidth={true} variant={"contained"}
                                    color={"secondary"}>Novo personagem</Button>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"body2"} color={"textSecondary"} align={"right"}>
                                {characters.length}/3 Personagens</Typography>
                        </Grid>
                    </Grid>
                </div>
                <Divider/>
                <CharacterCard selected={characters.find((obj: Character) => obj._id == selected)}
                               onSelect={(object => setSelected(object._id))} data={characters}/>
            </div>
            <div className={classes.boxContent}>
                <BackgroundCharacter onDelete={onDelete} onEdit={(obj) => onOpenForm(obj._id)}
                                     current={characters.find((obj: Character) => obj._id == selected)}/>
            </div>
        </div>
    }

    return (<Container maxWidth="lg" className={classes.root}>
        <BreadcrumbPage title={t('item.characters')}/>
        <Card elevation={10} className={classes.content}>
            {isLoading && <DataLoading.Character/>}
            <Fade timeout={500} in={!isLoading}>
                {content()}
            </Fade>
        </Card>
        <ConfirmExclusionForm onConfirm={onConfirmDelete} ref={confirmExclusion}/>
        <CharacterForm ref={form}/>
    </Container>)
}