import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container, Fade, Grid} from "@material-ui/core";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import CharacterForm, {CharacterFormRef} from "/client/components/form/CharacterForm";
import {useTranslation} from "react-i18next";
import {useMongoFetch} from "react-meteor-hooks";
import Characters from "/imports/collections/CharacterCollection";
import Character from "/imports/models/Character";
import {Mongo} from "meteor/mongo";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from "notistack";
import CharacterListBar from "/client/components/layout/character/CharacterListBar";
import CharacterView from "/client/components/layout/character/CharacterView";
import CharacterConfirmExclusion, {CharacterConfirmExclusionRef} from "/client/components/layout/character/CharacterConfirmExclusion";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: "flex",
        maxHeight: 800,
        flexDirection: "column",
        flexGrow: 1,
        width: '100%',
        height: '100%'
    },
    content: {
        position: 'relative',
        marginTop: theme.spacing(2),
        width: '100%',
        marginBottom: theme.spacing(4),
    },
    boxFlex: {
        width: '100%',
        display: "flex"
    },
}));
//</editor-folder>

export default function CharacterPage(): React.ReactElement {
    //<editor-folder defaultstate="collapsed" desc="Variables">
    const classes = useStyles();
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();
    const characters: Character[] = useMongoFetch(Characters.find());
    const [selected, setSelected] = React.useState<Mongo.ObjectID>();
    const form = React.createRef<CharacterFormRef>();
    const exclusion = React.createRef<CharacterConfirmExclusionRef>();

    //</editor-folder>

    //<editor-folder defaultstate="collapsed" desc="Triggers">
    React.useEffect(() => {
        if (characters[0] && !selected) setSelected(characters[0]._id);
    }, [characters]);

    //</editor-folder>

    function onSelect(value: any): void {
        if (value) {
            setSelected(value)
        } else {
            onOpenForm();
        }
    }

    function onOpenForm(object?: Character) {
        form.current!.open(object);
    }

    function onDelete(object: Character) {
        exclusion.current!.open(object);
    }

    function onConfirmDelete(object: Character): void {
        Meteor.call(EMethod.REMOVE_CHARACTER, object._id, function (error: Error) {
            if (error) return enqueueSnackbar(t('message.error_remove_character'), {variant: "error"});
            setSelected(undefined);
            return enqueueSnackbar(t('message.success_remove_character'), {variant: "success"});
        });
    }

    function content(): React.ReactElement {
        return <div className={classes.boxFlex}>
            <Grid spacing={2} container={true}>
                <Grid item={true} xs={12}>
                    <CharacterListBar datasource={characters} selected={selected} onSelect={onSelect}
                                      disable={characters.length >= 3}/>
                </Grid>
                <Grid item={true} xs={12}>
                    <CharacterView onEdit={onOpenForm} onDelete={onDelete} datasource={characters} selected={selected}/>
                </Grid>
            </Grid>
        </div>
    }

    return (<Container maxWidth="lg" className={classes.root}>
        <BreadcrumbPage title={t('item.characters')}/>
        <div className={classes.content}>
            <Fade timeout={500} in={true}>
                {content()}
            </Fade>
        </div>
        <CharacterConfirmExclusion ref={exclusion} onConfirm={onConfirmDelete}/>
        <CharacterForm ref={form}/>
    </Container>)
}