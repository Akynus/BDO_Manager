import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    Avatar,
    Badge, Box,
    Button,
    Card, Chip,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    Typography
} from "@material-ui/core";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import CharacterForm, {CharacterFormRef} from "/client/components/form/CharacterForm";
import {useTranslation} from "react-i18next";

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
    },
    smallAvatar: {
        width: 20,
        height: 20,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}));

export default function CharacterPage(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();
    const form = React.createRef<CharacterFormRef>();

    function onOpenForm() {
        form.current!.open();
    }

    function content(): React.ReactElement {
        return <div className={classes.boxFlex}>
            <div className={classes.boxList}>
                <div className={classes.boxListActions}>
                    <Grid container={true} spacing={1}>
                        <Grid item={true} xs={12}>
                            <Button onClick={onOpenForm} fullWidth={true} variant={"contained"}
                                    color={"secondary"}>Novo personagem</Button>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"body2"} color={"textSecondary"} align={"right"}>3/6
                                Personagens</Typography>
                        </Grid>
                    </Grid>
                </div>
                <Divider/>
                <List disablePadding={true}>
                    <ListItem button={true}>
                        <ListItemAvatar>
                            <Badge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                                   badgeContent={<Avatar className={classes.smallAvatar}
                                                         src={"https://oyster.ignimgs.com/mediawiki/apis.ign.com/black-desert-online/8/87/Wizardicon.jpg"}/>}>
                                <Avatar>62</Avatar>
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText primary={<Box component={"span"}>
                            {"Zart"} <Chip size={"small"} color={"primary"} label={'Principal'}/>
                        </Box>} secondary={'Mago'}/>
                    </ListItem>
                    <ListItem button={true}>
                        <ListItemAvatar>
                            <Avatar>62</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Box component={"span"}>
                            {"Doheyong"}
                        </Box>} secondary={'Striker'}/>
                    </ListItem>
                    <ListItem button={true}>
                        <ListItemAvatar>
                            <Avatar>62</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Box component={"span"}>
                            {"Frondarth"}
                        </Box>} secondary={'Guardiã'}/>
                    </ListItem>
                </List>
            </div>
            <div className={classes.boxContent}>Test</div>
        </div>
    }

    return (<Container maxWidth="lg" className={classes.root}>
        <BreadcrumbPage title={t('item.characters')}/>
        <Card elevation={10} className={classes.content}>
            {content()}
        </Card>
        <CharacterForm ref={form}/>
    </Container>)
}