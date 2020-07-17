import * as React from "react";
import {CardContent, Grid, Typography, WithStyles} from "@material-ui/core";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";
import {Skeleton} from "@material-ui/lab";

export class SettingLoader extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return <CardContent className={classes.root}>
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
        </CardContent>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
}