import * as React from "react";
import {Box, Grid, Icon, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        color: theme.palette.text.secondary,
        fontSize: '4rem'
    }
}), {classNamePrefix: 'path-not-found'});

export default function PathNotFound(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();

    return <Box className={classes.root}>
        <Grid container={true} spacing={1} justify={"center"} alignItems={"center"} direction={"column"}>
            <Grid item={true}>
                <Icon className={clsx([classes.icon, 'mdi mdi-help-circle-outline'])}/>
            </Grid>
            <Grid item={true}>
                <Typography display={"block"} component={"span"} variant={"body1"} color={"textSecondary"}>
                    {t('title.path_not_found')}
                </Typography>
            </Grid>
        </Grid>
    </Box>
}