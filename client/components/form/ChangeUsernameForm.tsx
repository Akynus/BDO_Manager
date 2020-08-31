import * as React from "react";
import {
    Button, Card,
    Container,
    Dialog, Divider,
    Grid, Icon, IconButton, ListItem, ListItemSecondaryAction, ListItemText
} from "@material-ui/core";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers";
import TextField from "/client/components/fields/TextField";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from "notistack";
import {useTranslation} from "react-i18next";
import Timeout = NodeJS.Timeout;
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        padding: theme.spacing(2),
    },
    form: {
        background: theme.palette.background.default,
    },
}));

//</editor-folder>

export interface ChangeUsernameFormRef {
    open: () => void;
}

interface IUserAuthentication {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const ChangeUsernameForm = React.forwardRef<ChangeUsernameFormRef, IProps>((props, ref) => {
    React.useImperativeHandle(ref, () => ({open: onOpen}));
    const schema = yup.object().shape({
        username: yup.string().min(3).max(30).required(),
        email: yup.string().min(3).max(60).required(),
        password: yup.string().min(3).max(30).required(),
        confirmPassword: yup.string().min(3).max(30).required(),
    });
    const {t} = useTranslation();
    const classes = useStyles();
    const {enqueueSnackbar} = useSnackbar();
    const [visible, setVisible] = React.useState<boolean>(false);
    const [checking, setChecking] = React.useState<boolean>(false);
    const [alreadyInUse, setAlreadyInUse] = React.useState<boolean>(false);
    const {handleSubmit, control, errors, getValues, watch, setError, reset} = useForm<IUserAuthentication>({
        resolver: yupResolver(schema),
    });
    let timer: Timeout;

    React.useLayoutEffect(() => {
        if (timer) clearInterval(timer);
        timer = setTimeout(onCheckUsername, 500);
    }, [watch()])

    function onOpen(): void {
        reset();
        setChecking(false);
        setAlreadyInUse(false);
        setVisible(true);
    }

    function onClose(): void {
        setVisible(false);
    }

    function onSubmit(data: IUserAuthentication): void {

    }

    function onCheckUsername(): void {
        const {username} = getValues();
        setChecking(true);
        Meteor.call(EMethod.CHECK_USER_NAME, username, (error: Meteor.Error, data: boolean) => {
            console.log(data);
            setChecking(false);
            if (error) {
                console.error(error);
                enqueueSnackbar(t('message.error_connection'), {variant: "error"});
            } else {
                if (data) {
                    setError('username', {type: 'default', message: t('message.already_in_use')})
                }
                setAlreadyInUse(data);
            }
        });
    }

    function contentForm(): React.ReactNode {
        return <Card className={classes.form}>
            <Grid container={true}>
                Test
            </Grid>
        </Card>
    }

    return (<Dialog open={visible} fullScreen={true}>
        <Container maxWidth={"md"}>
            <ListItem>
                <ListItemText primaryTypographyProps={{variant: "h6"}} primary={t('title.user_authentication_password')}
                              secondary={t('description.user_authentication_password')}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={onClose}>
                        <Icon className={'mdi mdi-close'}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <Grid className={classes.content} container={true} spacing={2}>
                <Grid item={true} xs={12}>
                    {contentForm()}
                </Grid>
            </Grid>
        </Container>
    </Dialog>)
});

interface IProps {

}

export default ChangeUsernameForm;