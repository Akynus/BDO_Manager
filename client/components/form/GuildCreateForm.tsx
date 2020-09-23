import * as React from "react";
import {
    Avatar,
    Box,
    Button,
    Card, CardActionArea,
    Container,
    Dialog,
    Divider, Grid,
    Icon,
    IconButton,
    ListItem, ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText, Step, StepContent, StepLabel, Stepper, Typography
} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import RandomID from "/client/utils/RandomID";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import TextField from "/client/components/fields/TextField";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {},
    content: {
        padding: theme.spacing(2),
    },
    form: {
        background: theme.palette.background.default,
    },
    avatarColor: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
    },
    cardImg: {
        marginTop: theme.spacing(1),
    },
    imgIcon: {
        margin: theme.spacing(1),
        width: 200,
        height: 200
    },
    imgBackground: {
        width: '100%',
        height: 200 + theme.spacing(2),
    },
    formPadding: {padding: theme.spacing(2)}
}), {classNamePrefix: RandomID()});

//</editor-folder>

interface GuildObject {
    name: string;
    discord: string;
    note: string;
}

export interface GuildCreateFormRef {
    open: () => void;
}

const GuildCreateForm = React.forwardRef<GuildCreateFormRef, IProps>((props, ref) => {
    const schema = yup.object().shape({
        name: yup.string().max(30).required(),
        discord: yup.string().max(100).url(),
        note: yup.string().max(200)
    });
    const [step, setStep] = React.useState<number>(0);
    const [visible, setVisible] = React.useState<boolean>(false);
    const {t} = useTranslation();
    const classes = useStyles();
    const {handleSubmit, control, errors} = useForm<GuildObject>({resolver: yupResolver(schema)});
    React.useImperativeHandle(ref, () => ({open: onOpen}));

    function onOpen(): void {
        setStep(0);
        setVisible(true);
    }

    function onClose(): void {
        setVisible(false);
    }

    function onSubmitOne(data:any): void {
        setStep(1);
    }

    function formContentOne(): React.ReactNode {
        return <Card className={classes.form}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={classes.avatarColor}>
                        <Icon className={'mdi mdi-format-list-checks'}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={t('form.guild.title.guild')}
                              secondary={t('form.guild.title.guild_description')}/>
            </ListItem>
            <Divider/>
            <Box className={classes.formPadding}>
                <form>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={6}>
                            <TextField maxLength={30} label={String(t('form.guild.field.name'))} name={'name'}
                                       control={control}
                                       errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <TextField maxLength={100} type={'url'} label={String(t('form.guild.field.discord'))}
                                       name={'discord'}
                                       control={control}
                                       errors={errors}/>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <TextField maxLength={200} multiline={true} label={String(t('form.guild.field.note'))}
                                       name={'note'}
                                       control={control}
                                       errors={errors}/>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Divider/>
            <Box className={classes.formPadding}>
                <Grid container={true} spacing={2} justify={"flex-end"}>
                    <Grid item={true}>
                        <Button onClick={handleSubmit(onSubmitOne)} variant={"contained"}
                                color={"primary"}>{t('action.next')}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    }

    function formContentTwo(): React.ReactNode {
        return <Card className={classes.form}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={classes.avatarColor}>
                        <Icon className={'mdi mdi-monitor-dashboard'}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={t('form.guild.title.header')}
                              secondary={t('form.guild.title.header_description')}/>
            </ListItem>
            <Divider/>
            <Box className={classes.formPadding}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} md={6}>
                        <Typography variant={"subtitle2"}>{t('form.guild.field.icon')}</Typography>
                        <Divider/>
                        <Card className={classes.cardImg}>
                            <CardActionArea>
                                <Grid container={true} justify={"center"} alignItems={"center"}>
                                    <Grid item={true}>
                                        <Avatar variant={"circle"} className={classes.imgIcon}/>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item={true} md={6}>
                        <Typography variant={"subtitle2"}>{t('form.guild.field.background')}</Typography>
                        <Divider/>
                        <Card className={classes.cardImg}>
                            <CardActionArea>
                                <Grid container={true} justify={"center"} alignItems={"center"}>
                                    <Grid item={true} xs={12}>
                                        <Avatar variant={"square"} className={classes.imgBackground}/>
                                    </Grid>
                                </Grid>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Divider/>
            <Box className={classes.formPadding}>
                <Grid container={true} spacing={2} justify={"flex-end"}>
                    <Grid item={true}>
                        <Button onClick={() => setStep(0)} variant={"text"}
                                color={"primary"}>{t('action.back')}</Button>
                    </Grid>
                    <Grid item={true}>
                        <Button onClick={() => setStep(2)} variant={"contained"}
                                color={"primary"}>{t('action.skip')}</Button>
                    </Grid>
                    <Grid item={true}>
                        <Button onClick={() => setStep(2)} variant={"contained"}
                                color={"primary"}>{t('action.next')}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    }

    return <Dialog open={visible} fullScreen={true}>
        <Container maxWidth={"md"}>
            <ListItem>
                <ListItemText primaryTypographyProps={{variant: "h6"}} primary={t('title.guild_form')}
                              secondary={t('description.guild_form')}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={onClose}>
                        <Icon className={'mdi mdi-close'}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <Grid className={classes.content} container={true} spacing={2}>
                <Grid item={true} xs={12}>
                    <Stepper activeStep={step} orientation="vertical">
                        <Step key={0}>
                            <StepLabel>{t('form.guild.item.step_one')}</StepLabel>
                            <StepContent>
                                {formContentOne()}
                            </StepContent>
                        </Step>
                        <Step key={1}>
                            <StepLabel>{t('form.guild.item.step_two')}</StepLabel>
                            <StepContent>
                                {formContentTwo()}
                            </StepContent>
                        </Step>
                        <Step key={2}>
                            <StepLabel>{t('form.guild.item.step_three')}</StepLabel>
                            <StepContent>

                            </StepContent>
                        </Step>
                        <Step key={3}>
                            <StepLabel>{t('form.guild.item.step_four')}</StepLabel>
                            <StepContent>

                            </StepContent>
                        </Step>
                    </Stepper>
                </Grid>
            </Grid>
        </Container>
    </Dialog>
});

interface IProps {
}

export default GuildCreateForm;