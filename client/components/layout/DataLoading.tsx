import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {CardContent, Fade, Grid, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {Skeleton} from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        background: theme.palette.background.paper,
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
}));

function Setting(): React.ReactElement {
    const classes = useStyles();
    return (<CardContent className={classes.root}>
        <Grid container={true} spacing={1}>
            <Grid item={true} xs={3}>
                <Grid container={true} spacing={1}>
                    <Grid item={true} xs={12}>
                        <Typography variant={"h3"}>
                            <Skeleton/>
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Typography variant={"h3"}>
                            <Skeleton/>
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Typography variant={"h3"}>
                            <Skeleton/>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item={true} xs={9}>
                <Grid container={true} spacing={1}>
                    <Grid item={true} xs={12}>
                        <Typography variant={"h3"}>
                            <Skeleton/>
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={8}>
                        <Typography variant={"h1"}>
                            <Skeleton/>
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={4}>
                        <Typography variant={"h1"}>
                            <Skeleton/>
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Typography variant={"caption"}>
                            <Skeleton/>
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Typography variant={"caption"}>
                            <Skeleton/>
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={8}>
                        <Typography variant={"caption"}>
                            <Skeleton/>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </CardContent>)
}

function Character(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    return (<Fade timeout={500} in={props.show}>
        <CardContent className={classes.root}>
            <Grid container={true} spacing={1}>
                <Grid item={true} xs={3}>
                    <Grid container={true} spacing={1}>
                        <Grid item={true} xs={12}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Skeleton height={40} width={40} animation={"wave"} variant={"circle"}/>
                                </ListItemAvatar>
                                <ListItemText primary={<Skeleton animation={"wave"} width={'100%'}/>}
                                              secondary={<Skeleton animation={"wave"} width={'70%'}/>}/>
                            </ListItem>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Skeleton height={40} width={40} animation={"wave"} variant={"circle"}/>
                                </ListItemAvatar>
                                <ListItemText primary={<Skeleton animation={"wave"} width={'100%'}/>}
                                              secondary={<Skeleton animation={"wave"} width={'70%'}/>}/>
                            </ListItem>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Skeleton height={40} width={40} animation={"wave"} variant={"circle"}/>
                                </ListItemAvatar>
                                <ListItemText primary={<Skeleton animation={"wave"} width={'100%'}/>}
                                              secondary={<Skeleton animation={"wave"} width={'70%'}/>}/>
                            </ListItem>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item={true} xs={9}>
                    <Grid container={true} spacing={1}>
                        <Grid item={true} xs={4}>
                            <Typography variant={"h1"}>
                                <Skeleton/>
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={8}>
                            <Typography variant={"h1"}>
                                <Skeleton/>
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <Typography variant={"h1"}>
                                <Skeleton/>
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"caption"}>
                                <Skeleton/>
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <Typography variant={"caption"}>
                                <Skeleton/>
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={8}>
                            <Typography variant={"caption"}>
                                <Skeleton/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Fade>)
}

interface IProps {
    show?: boolean;
}

export default class DataLoading {
    static Setting = Setting;
    static Character = Character;
}