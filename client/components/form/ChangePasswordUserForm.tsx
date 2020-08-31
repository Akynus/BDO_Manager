import * as React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid} from "@material-ui/core";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers";
import TextField from "/client/components/fields/TextField";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from "notistack";
import {useTranslation} from "react-i18next";

export interface ChangePasswordUserFormRef {
    open: () => void;
}

interface IPassword {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const ChangePasswordUserForm = React.forwardRef<ChangePasswordUserFormRef, IProps>((props, ref) => {
    React.useImperativeHandle(ref, () => ({open: onOpen}));
    const schema = yup.object().shape({
        oldPassword: yup.string().min(6).max(30),
        newPassword: yup.string().min(6).max(30).required(),
        confirmPassword: yup.string().min(6).max(30).required(),
    });
    const {t} = useTranslation();
    const {enqueueSnackbar} = useSnackbar();
    const [visible, setVisible] = React.useState<boolean>(false);
    const {handleSubmit, control, errors, setError} = useForm<IPassword>({
        resolver: yupResolver(schema),
    });

    function onOpen(): void {
        setVisible(true);
    }

    function onClose(): void {
        setVisible(false);
    }

    function onSubmit(data: IPassword): void {
        if (data.newPassword != data.confirmPassword) {
            setError('confirmPassword', {type: 'invalid', message: String(t('message.passwords_were_not_equals'))})
            return;
        }

        if (props.updatingPassword) {
            Meteor.call(EMethod.UPDATE_USER_PASSWORD, data.newPassword, data.oldPassword, (error: Meteor.Error) => {
                onClose();
                if (error) {
                    console.error(error);
                    enqueueSnackbar(t('message.error_update_password'), {autoHideDuration: 5, variant: "error"});
                }
            });
        } else {
            Meteor.call(EMethod.INSERT_USER_PASSWORD, data.newPassword, (error: Meteor.Error) => {
                onClose();
                if (error) {
                    console.error(error);
                    enqueueSnackbar(t('message.error_insert_password'), {autoHideDuration: 5, variant: "error"});
                }
            });
        }
    }

    return (<Dialog fullWidth={true} maxWidth={"xs"} open={visible} onClose={onClose}>
        <DialogTitle>
            {t('title.user_password')}
        </DialogTitle>

        <DialogContent>
            <DialogContentText>
                {props.updatingPassword ? t('description.user_password_update') : t('description.user_password_insert')}
            </DialogContentText>

            <Grid container={true} spacing={3}>
                {props.updatingPassword && <Grid container={true} item={true} xs={12} spacing={1}>
                    <Grid item={true} xs={12}>
                        <TextField type={'password'} label={String(t('field.old_password'))} name={'oldPassword'}
                                   control={control}
                                   errors={errors}/>
                    </Grid>
                </Grid>}
                <Grid container={true} item={true} xs={12} spacing={1}>
                    <Grid item={true} xs={12}>
                        <TextField type={'password'} label={String(t('field.new_password'))} name={'newPassword'}
                                   control={control}
                                   errors={errors}/>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField type={'password'} label={String(t('field.confirm_password'))}
                                   name={'confirmPassword'}
                                   control={control}
                                   errors={errors}/>
                    </Grid>
                </Grid>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose} color="primary">
                {t('action.cancel')}
            </Button>
            <Button onClick={handleSubmit(onSubmit)} color="primary">
                {t('action.save')}
            </Button>
        </DialogActions>
    </Dialog>)
});

interface IProps {
    updatingPassword?: boolean;
}

export default ChangePasswordUserForm;