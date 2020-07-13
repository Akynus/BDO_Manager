import * as React from "react";
import {
    Card,
    CardContent,
    WithStyles,
    Grid, Backdrop, CircularProgress,
    TextField, Button, InputAdornment, Icon, IconButton, Link, Tooltip, Typography
} from "@material-ui/core";
import {Meteor} from "meteor/meteor";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";
import Form, {Field, FormInstance} from "rc-field-form";
import ValidationForm from "/client/utils/ValidationForm";
import {ValidateErrorEntity} from "rc-field-form/es/interface";
import MessageForm, {IMessageForm} from "/client/utils/MessageForm";
import {Alert} from "@material-ui/lab";

export default class extends React.Component<IProps, IState> {
    form: FormInstance;

    constructor(props: IProps) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onError = this.onError.bind(this);
        this.state = {loading: false, errors: [], invalidAuth: false}
    }

    private onError(data: ValidateErrorEntity): void {
        this.setState({errors: data.errorFields});
    }

    private onSubmit(data: any): void {
        this.setState({errors: [], loading: true});
        Meteor.loginWithPassword(data['user'], data['password'], error => {
            console.error(error);
            this.setState({loading: false});
            if (error) {
                this.setState({invalidAuth: true});
                this.form.resetFields(['password']);
            }
        });

    }

    private buildErrorAuth(): React.ReactNode {
        const{t}=this.props;
        const {invalidAuth} = this.state;
        if (!invalidAuth) return undefined;
        return <Alert severity="error" onClose={() => this.setState({invalidAuth: false})}>{t('description.invalidAuthentication')}</Alert>
    }

    render() {
        const {classes, t} = this.props;
        const {loading, errors} = this.state;

        return <Card className={classes.root} elevation={10}>
            <CardContent className={classes.content}>
                <Form name={'login'} ref={(ref: FormInstance) => this.form = ref} onFinish={this.onSubmit}
                      onFinishFailed={this.onError}>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <Grid container={true} alignItems={"center"} justify={"center"} direction={"column"}>
                                <Grid item={true}>
                                    <Typography className={classes.titleCard}
                                                variant={"h5"}>{t('title.welcome')}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Field name={'user'} rules={[ValidationForm.REQUIRED]}>
                                <TextField InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <Icon fontSize={"small"} color={"disabled"} className={'fas fa-user'}/>
                                    </InputAdornment>
                                }} label={t('field.user')} variant={"outlined"} size={"small"} fullWidth={true}
                                           error={MessageForm(errors, 'user').isError()}
                                           helperText={MessageForm(errors, 'user').textError()}/>
                            </Field>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Field name={'password'} rules={[ValidationForm.REQUIRED]}>
                                <TextField type={'password'} InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        <Icon fontSize={"small"} color={"disabled"} className={'fas fa-key'}/>
                                    </InputAdornment>
                                }} label={t('field.password')} variant={"outlined"} size={"small"} fullWidth={true}
                                           error={MessageForm(errors, 'password').isError()}
                                           helperText={MessageForm(errors, 'password').textError()}/>
                            </Field>
                        </Grid>
                        <Grid item={true} xs={12}>
                            {this.buildErrorAuth()}
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Button size={"large"} variant={"contained"} color={"primary"} fullWidth={true}
                                    type={"submit"}>{t('action.login')}</Button>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Link component="button" variant="subtitle2"
                                  color={"textSecondary"}>{t('action.forgotPassword')}</Link>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Grid container={true} justify={"center"}>
                                <Grid item={true}>
                                    <Tooltip title={t('description.loginWithFacebook')} placement="top">
                                        <IconButton color={"primary"}>
                                            <Icon className={'fab fa-facebook'}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item={true}>
                                    <Tooltip title={t('description.loginWithGoogle')} placement="top">
                                        <IconButton color={"primary"}>
                                            <Icon className={'fab fa-google'}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                                <Grid item={true}>
                                    <Tooltip title={t('description.loginWithDiscord')} placement="top">
                                        <IconButton color={"primary"}>
                                            <Icon className={'fab fa-discord'}/>
                                        </IconButton>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Form>
                <Backdrop className={classes.loading} open={loading}>
                    <CircularProgress color={"secondary"} size={50}/>
                </Backdrop>
            </CardContent>
        </Card>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {
}

interface IState {
    loading: boolean;
    errors: IMessageForm[];
    invalidAuth: boolean;
}