import * as React from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Icon, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import clsx from "clsx";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        background: theme.palette.background.default
    },
    cardMedia: {
        height: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconMedia: {
        fontSize: theme.typography.pxToRem(100),
        color: theme.palette.primary.main
    },
    cardContent: {
        height: 110
    }
}), {classNamePrefix: 'guild-not-found'});
//</editor-folder>

export default function GuildNotFound(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();

    return <Box className={classes.root}>
        <Grid container={true} spacing={3} alignItems={"center"} justify={"center"}>
            <Grid item={true} xs={12} md={4} sm={5}>
                <Card className={classes.card} elevation={4}>
                    <CardActionArea>
                        <CardMedia className={classes.cardMedia}>
                            <Icon className={clsx(['mdi mdi-account-arrow-right', classes.iconMedia])}/>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom={true} variant="h6" component="h3">
                                {t('title.join_guild')}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {t('description.join_guild')}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item={true} xs={12} md={4} sm={5}>
                <Card className={classes.card} elevation={4}>
                    <CardActionArea>
                        <CardMedia className={classes.cardMedia}>
                            <Icon className={clsx(['mdi mdi-account-multiple-plus', classes.iconMedia])}/>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom={true} variant="h6" component="h3">
                                {t('title.create_guild')}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {t('description.create_guild')}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </Box>
}