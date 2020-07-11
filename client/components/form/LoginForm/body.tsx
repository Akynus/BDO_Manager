import * as React from "react";
import {
    Card,
    CardContent,
    WithStyles,
    Grid,
    TextField, Button, InputAdornment, Icon, Divider, IconButton, Link
} from "@material-ui/core";
import style from "./style";
import {IComponent} from "client/resources/Interfaces";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {}
    }

    render() {
        const {classes, t} = this.props;
        return <Card className={classes.root} elevation={10}>
            <CardContent className={classes.content}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12}>
                        <TextField InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <Icon color={"secondary"} className={'fas fa-user'}/>
                            </InputAdornment>
                        }} label={t('field.user')} variant={"outlined"} size={"small"} fullWidth={true}/>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <Icon color={"secondary"} className={'fas fa-key'}/>
                            </InputAdornment>
                        }} label={t('field.password')} variant={"outlined"} size={"small"} fullWidth={true}/>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Button variant={"contained"} color={"primary"} fullWidth={true}
                                type={"submit"}>{t('action.login')}</Button>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Link component="button" variant="body2" color={"secondary"}>{t('action.forgotPassword')}</Link>
                    </Grid>
                    <Divider/>
                    <Grid item={true} xs={12}>
                        <Grid container={true} justify={"center"}>
                            <Grid item={true}>
                                <IconButton color={"primary"}>
                                    <Icon className={'fas fa-discord'}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {
}

interface IState {
}