import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Box, Container, Grid, Zoom} from "@material-ui/core";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import {useTranslation} from "react-i18next";
import ProfileCharacterCard from "/client/components/layout/ProfileCharacterCard";
import CharacterSelector, {CharacterSelectorRef} from "/client/components/form/CharacterSelector";
import ProfileFamilyCard from "/client/components/layout/ProfileFamilyCard";
import ProfileGuildCard from "/client/components/layout/ProfileGuildCard";
import ProfileBiographyCard from "/client/components/layout/ProfileBiographyCard";
import {useTracker} from "react-meteor-hooks";
import Profiles from "/imports/collections/ProfileCollection";
import Profile from "/imports/models/Profile";
import Character from "/imports/models/Character";
import Characters from "/imports/collections/CharacterCollection";
import ProfileFamilyNameForm, {ProfileFamilyNameFormRef} from "/client/components/form/ProfileFamilyNameForm";

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
    gridFixedHeight: {
        height: 'min-content'
    }
}));
//</editor-folder>

export default function ProfilePage(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();
    const profile = useTracker<Profile | undefined>(() => Profiles.findOne());
    const mainCharacter = useTracker<Character | undefined>(() => {
        if (profile) return Characters.findOne({_id: profile.mainCharacter});
        return undefined;
    }, [profile]);
    const characterSelector = React.createRef<CharacterSelectorRef>();
    const profileFamilyForm = React.createRef<ProfileFamilyNameFormRef>();

    if (!profile) return <div/>

    function onChangeFamilyName(): void {
        if (profileFamilyForm.current) {
            profileFamilyForm.current.open();
        }
    }

    function onChoseCharacter(): void {
        if (characterSelector.current) {
            characterSelector.current.open();
        }
    }

    return (<Container maxWidth="lg" className={classes.root}>
        <BreadcrumbPage title={t('item.profile')}/>
        <Box className={classes.content}>
            <Grid container={true} spacing={2}>
                <Grid item={true} container={true} xs={12} sm={6} lg={4}>
                    <Grid item={true} xs={12}>
                        <Zoom timeout={300} in={true}>
                            <div>
                                <ProfileCharacterCard character={mainCharacter} onChose={onChoseCharacter}/>
                            </div>
                        </Zoom>
                    </Grid>
                </Grid>
                <Grid className={classes.gridFixedHeight} item={true} container={true} spacing={2} xs={12} sm={6}
                      lg={8}>
                    <Grid item={true} xs={12} sm={12} md={6}>
                        <Zoom timeout={400} in={true}>
                            <div>
                                <ProfileFamilyCard onChange={onChangeFamilyName} familyName={profile.familyName}/>
                            </div>
                        </Zoom>
                    </Grid>
                    <Grid item={true} xs={12} sm={12} md={6}>
                        <Zoom timeout={500} in={true}>
                            <div>
                                <ProfileGuildCard/>
                            </div>
                        </Zoom>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Zoom timeout={600} in={true}>
                            <div>
                                <ProfileBiographyCard/>
                            </div>
                        </Zoom>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <CharacterSelector ref={characterSelector}/>
        <ProfileFamilyNameForm ref={profileFamilyForm}/>
    </Container>);
}