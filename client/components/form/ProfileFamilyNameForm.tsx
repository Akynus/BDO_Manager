import * as React from "react";
import {TransitionProps} from "@material-ui/core/transitions";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Fade} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import TextField from "/client/components/fields/TextField";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers";
import {useMethod} from "react-meteor-hooks";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from "notistack";

const TransitionDialog = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});

//<editor-folder defaultstate="collapsed" desc="Types">
export type ProfileFamilyNameFormRef = {
    open: () => void;
}
//</editor-folder>

const ProfileFamilyNameForm = React.forwardRef<ProfileFamilyNameFormRef, IProps>((props, ref) => {
    React.useImperativeHandle(ref, () => ({open: onOpen}));
    //<editor-folder defaultstate="collapsed" desc="Variables">
    const schema = yup.object().shape({
        text: yup.string().max(30).required(),
    });
    const [opened, setOpened] = React.useState<boolean>(false);
    const {call} = useMethod(EMethod.UPDATE_PROFILE);
    const {enqueueSnackbar} = useSnackbar();
    const {t} = useTranslation();
    const {control, errors, reset, handleSubmit} = useForm({resolver: yupResolver(schema)});

    //<editor-folder>
    function onOpen(): void {
        reset();
        setOpened(true);
    }

    function onClose(): void {
        setOpened(false);
    }

    function onSubmit(data: Object): void {
        call('familyName',data['text']).catch((reason) => {
            console.error(reason);
            enqueueSnackbar(t('message.error_update_profile'), {variant: "error"});
        });

        onClose();
    }

    return (
        <Dialog onClose={onClose} open={opened} fullWidth={true} maxWidth={"sm"} TransitionComponent={TransitionDialog}>
            <DialogTitle>{t('title.change_family_name')}</DialogTitle>
            <DialogContent>
                <TextField maxLength={30} label={t('description.family_name')} name={'text'} control={control}
                           errors={errors}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    {t('action.close')}
                </Button>
                <Button onClick={handleSubmit(onSubmit)} color="secondary">
                    {t('action.save')}
                </Button>
            </DialogActions>
        </Dialog>)
});

interface IProps {

}

export default ProfileFamilyNameForm;