import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {AppBar, Box, Card, Container} from "@material-ui/core";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import {useTranslation} from "react-i18next";
import GuildNotFound from "/client/components/layout/GuildNotFound";

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
        marginBottom: theme.spacing(4),
    }
}));
//</editor-folder>

export default function GuildPage(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();

    return (<Container maxWidth="lg" className={classes.root}>
        <BreadcrumbPage title={t('item.guild')}/>
        <Card elevation={10} className={classes.content}>
            <GuildNotFound/>
        </Card>
    </Container>);
}