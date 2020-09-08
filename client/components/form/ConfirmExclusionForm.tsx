import * as React from "react";
import {TransitionProps} from "@material-ui/core/transitions";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade} from "@material-ui/core";
import {useTranslation, Trans} from "react-i18next";
import {useForm} from "react-hook-form";
import TextField from "/client/components/fields/TextField";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers";
import {Mongo} from "meteor/mongo";

const TransitionDialog = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});

//<editor-folder defaultstate="collapsed" desc="Types">
export type ConfirmExclusionFormRef = {
    open: (object: ObjectRef) => void;
}
type ObjectRef = {
    text: string;
    id: Mongo.ObjectID;
}
//</editor-folder>

const ConfirmExclusionForm = React.forwardRef<ConfirmExclusionFormRef, IProps>((props, ref) => {
    React.useImperativeHandle(ref, () => ({open: onOpen}));
    //<editor-folder defaultstate="collapsed" desc="Variables">
    const schema = yup.object().shape({
        text: yup.string().required(),
    });
    const [opened, setOpened] = React.useState<boolean>(false);
    const [objectRef, setObjectRef] = React.useState<ObjectRef>({
        text: '',
        id: new Mongo.ObjectID()
    });
    const {t} = useTranslation();
    const {control, errors, reset, watch} = useForm({resolver: yupResolver(schema)});

    //<editor-folder>
    function isEqualValues(): boolean {
        const {text} = watch();
        return text == objectRef.text;
    }

    function onOpen(object: ObjectRef): void {
        setOpened(true);
        setObjectRef(object);
    }

    function onClose(): void {
        reset();
        setOpened(false);
    }

    function onConfirm(): void {
        props.onConfirm(objectRef.id);
        setOpened(false);
    }

    return (<Dialog onClose={onClose} open={opened} maxWidth={"xs"} TransitionComponent={TransitionDialog}>
        <DialogTitle>{t('title.confirm_exclusion')}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                <Trans i18nKey={'description.confirm_exclusion'}>
                    If you are sure about remove object <strong>{{text: objectRef.text}}</strong> type its value in text
                    field bellow
                </Trans>
            </DialogContentText>
            <TextField name={'text'} control={control} errors={errors}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="secondary">
                {t('action.close')}
            </Button>
            <Button onClick={onConfirm} color="secondary" disabled={!isEqualValues()}>
                {t('action.delete')}
            </Button>
        </DialogActions>
    </Dialog>)
});

interface IProps {
    onConfirm: (id: Mongo.ObjectID) => void;
}

export default ConfirmExclusionForm;