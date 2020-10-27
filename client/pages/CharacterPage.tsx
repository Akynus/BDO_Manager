import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container, Fade, Grid} from "@material-ui/core";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import CharacterRegisterForm, {CharacterRegisterFormRef} from "/client/components/form/character/CharacterRegisterForm";
import {useTranslation} from "react-i18next";
import {useMongoFetch} from "react-meteor-hooks";
import Characters from "/imports/collections/CharacterCollection";
import Character from "/imports/models/Character";
import {Mongo} from "meteor/mongo";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from "notistack";
import CharacterListBar from "/client/components/layout/character/CharacterListBar";
import CharacterView from "/client/components/layout/character/CharacterView";

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
    const form = React.createRef<CharacterRegisterFormRef>();
    //</editor-folder>

    //<editor-folder defaultstate="collapsed" desc="Triggers">
    React.useEffect(() => {
        if (characters[0]) setSelected(characters[0]._id);
    }, [characters]);

    //</editor-folder>

    function onSelect(value: any): void {
        if (value) {
            setSelected(value)
        } else {
            onOpenForm();
        }
    }

    function onOpenForm(id?: Mongo.ObjectID) {
        form.current!.open(id);
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
            <Grid spacing={2} container={true}>
                <Grid item={true} xs={12}>
                    <CharacterListBar datasource={characters} selected={selected} onSelect={onSelect}/>
                </Grid>
                <Grid item={true} xs={12}>
                    <CharacterView onEdit={onOpenForm} datasource={characters} selected={selected}/>
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
        <CharacterRegisterForm ref={form}/>
    </Container>)
}