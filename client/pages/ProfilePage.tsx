import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Box, Container, Grid} from "@material-ui/core";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import {useTranslation} from "react-i18next";
import ProfileCharacterCard from "/client/components/layout/ProfileCharacterCard";
import CharacterSelector, {CharacterSelectorRef} from "/client/components/form/CharacterSelector";

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
        flexGrow: 1,
        width: '100%',
        height: '100%',
        minHeight: 520,
    },
}));
//</editor-folder>

export default function ProfilePage(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();
    const characterSelector = React.createRef<CharacterSelectorRef>();

    function onChoseCharacter(): void {
        if (characterSelector.current) {
            characterSelector.current.open();
        }
    }

    return (<Container maxWidth="lg" className={classes.root}>
        <BreadcrumbPage title={t('item.profile')}/>
        <Box className={classes.content}>
            <Grid contrainer={true} spacing={1}>
                <Grid item={true} xs={12} sm={6} lg={4}>
                    <ProfileCharacterCard onChose={onChoseCharacter}/>
                </Grid>
            </Grid>
        </Box>
        <CharacterSelector ref={characterSelector}/>
    </Container>);
}