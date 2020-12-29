import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container, Grid} from "@material-ui/core";
import TitlesPage from "/client/components/layout/generic/TitlesPage";
import SkeletonLoad from "/client/components/layout/generic/SkeletonLoad";
import {useTranslation} from "react-i18next";
import {useMongoFetch, useSubscription} from "react-meteor-hooks";
import EPublish from "/imports/enumerables/EPublish";
import Character from "/imports/models/Character";
import Characters from "/imports/collections/CharacterCollection";
import InsertCardButton from "/client/components/layout/generic/InsertCardButton";
import CharacterCard from "/client/components/layout/character/CharacterCard";
import CharacterView, {CharacterViewRef} from "/client/components/layout/character/CharacterView";
import CharacterForm, {CharacterFormRef} from "/client/components/layout/character/CharacterForm";

//<editor-folder desc="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: "flex",
        maxHeight: 800,
        flexDirection: "column",
        flexGrow: 1,
        width: '100%',
        height: '100%'
    }
}));
//</editor-folder>

export default function CharacterPage(): React.ReactElement {
    //<editor-folder desc="collapsed" desc="Variables">
    const classes = useStyles();
    const {t} = useTranslation();
    const viewRef = React.createRef<CharacterViewRef>();
    const formRef = React.createRef<CharacterFormRef>();
    const loading = useSubscription(EPublish.CHARACTERS);
    const datasource: Character[] = useMongoFetch(Characters.find());
    //</editor-folder>

    //<editor-folder desc="collapsed" desc="Component Loading">
    if (loading) return (<Container maxWidth="lg" className={classes.root}>
        <Grid container={true} spacing={2}>
            <Grid item={true} xs={12}>
                <TitlesPage title={t('view.characters')} icon={'mdi mdi-account-multiple'}/>
            </Grid>
            <Grid item={true} xs={12}>
                <SkeletonLoad>
                    <SkeletonLoad.Card/>
                    <SkeletonLoad.Card/>
                    <SkeletonLoad.Card/>
                    <SkeletonLoad.Card/>
                </SkeletonLoad>
            </Grid>
        </Grid>
    </Container>)

    //</editor-folder>

    function allowInsert(): boolean {
        return true;
    }

    function onOpenView(character: Character): void {
        if (viewRef.current) viewRef.current.open(character);
    }

    function onOpenForm(character?: Character): void {
        if (formRef.current) formRef.current.open(character);
    }

    function onDelete(character: Character): void {
    }

    return <React.Fragment>
        <Container maxWidth="lg" className={classes.root}>
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={12}>
                    <TitlesPage title={t('view.characters')} icon={'mdi mdi-account-multiple'}/>
                </Grid>

                {allowInsert() && <Grid lg={3} md={4} sm={6} xs={12} item={true}>
                    <InsertCardButton label={t('action.insert')} description={t('item.character.insert_text')}
                                      onClick={onOpenForm}/>
                </Grid>}
                {datasource.map(value => <Grid lg={3} md={4} sm={6} xs={12} item={true}>
                    <CharacterCard character={value} onClick={() => onOpenView(value)}/>
                </Grid>)}
            </Grid>
        </Container>
        <CharacterView ref={viewRef} onEdit={onOpenForm} onDelete={onDelete}/>
        <CharacterForm ref={formRef}/>
    </React.Fragment>
}