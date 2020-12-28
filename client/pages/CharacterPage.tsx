import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Container, Grid, Zoom} from "@material-ui/core";
import TitlesPage from "/client/components/layout/generic/TitlesPage";
import SkeletonLoad from "/client/components/layout/generic/SkeletonLoad";
import {useTranslation} from "react-i18next";
import {useMongoFetch, useSubscription} from "react-meteor-hooks";
import EPublish from "/imports/enumerables/EPublish";
import Character from "/imports/models/Character";
import Characters from "/imports/collections/CharacterCollection";
import InsertCardButton from "/client/components/layout/generic/InsertCardButton";

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
    const loading = useSubscription(EPublish.CHARACTERS);
    const datasource: Character[] = useMongoFetch(Characters.find());
    //</editor-folder>

    //<editor-folder desc="collapsed" desc="Component Loading">
    if (loading) return (<Container maxWidth="lg" className={classes.root}>
        <TitlesPage title={t('view.characters')} icon={'mdi mdi-account-multiple'}/>
        <SkeletonLoad>
            <SkeletonLoad.Card/>
            <SkeletonLoad.Card/>
            <SkeletonLoad.Card/>
            <SkeletonLoad.Card/>
        </SkeletonLoad>
    </Container>)

    //</editor-folder>

    function allowInsert(): boolean {
        return true;
    }

    function onInsert(): void {

    }

    return (<Container maxWidth="lg" className={classes.root}>
        <TitlesPage title={t('view.characters')} icon={'mdi mdi-account-multiple'}/>
        <Grid container={true} spacing={2}>
            {allowInsert() && <Grid lg={3} md={4} sm={6} xs={12} item={true}>
                <InsertCardButton label={t('action.insert')} description={t('item.character.insert_text')}
                                  onClick={onInsert}/>
            </Grid>}
        </Grid>
    </Container>)
}