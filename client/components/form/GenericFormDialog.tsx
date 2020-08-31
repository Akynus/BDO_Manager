import * as React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers";
import TextField from "/client/components/fields/TextField";

export interface GenericFormDialogRef {
    open: () => void;
}

const GenericFormDialogRef = React.forwardRef<GenericFormDialogRef, IProps>((props, ref) => {
    React.useImperativeHandle(ref, () => ({open: onOpen}));
    const schema = yup.object().shape({
        text: yup.mixed<string>().required()
    });
    const [visible, setVisible] = React.useState<boolean>(false);
    const {handleSubmit, control, errors, watch, getValues, setError} = useForm<any>({
        resolver: yupResolver(schema)
    });

    React.useLayoutEffect(() => {
        if (props.isValid) {
            const {text} = getValues();
            const result = props.isValid(text);
            if (result) {
                setError('text', {
                    message: result,
                    type: 'default'
                });
            }
        }
    }, [watch()])

    function onOpen(): void {
        setVisible(true);
    }

    function onClose(): void {
        setVisible(false);
    }

    function titleDialog(): React.ReactNode {
        if (props.title) {
            return <DialogTitle>{props.title}</DialogTitle>
        } else {
            return undefined;
        }
    }

    function titleContentText(): React.ReactNode {
        if (props.content) {
            return <DialogContentText>{props.content}</DialogContentText>
        } else {
            return undefined;
        }
    }

    function onSubmit(data: Object, error: any): void {
        console.log(data, error);
        if (error) {
            return;
        }
        props.onSubmit(data['text']);
    }

    return (<Dialog fullWidth={true} maxWidth={"sm"} open={visible} onClose={onClose}>
        {titleDialog()}
        <DialogContent>
            {titleContentText()}
            <TextField type={props.typeInput} label={props.labelInput} name={'text'} control={control} errors={errors}/>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleSubmit(onSubmit)} color="primary">
                Subscribe
            </Button>
        </DialogActions>
    </Dialog>)
});

interface IProps {
    title?: React.ReactNode;
    content: React.ReactNode;
    labelInput?: string;
    typeInput?: string;
    onSubmit: (value: string) => void;
    isValid?: (value: string) => string | undefined;
}

export default GenericFormDialogRef;