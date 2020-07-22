import * as React from "react";
import {FormControl, FormHelperText, InputLabel, Select} from "@material-ui/core";
import {Controller} from "react-hook-form";
import {Control, FieldErrors} from "react-hook-form/dist/types/form";

export default function SelectField<T = Object>(props: IProps<T>): React.ReactElement<IProps<T>> {

    function buildItems(): React.ReactNode {
        if (props.dataSource && props.renderItem) {
            return props.dataSource.map(props.renderItem);
        } else {
            return props.children;
        }
    }

    return (<FormControl fullWidth={true} variant={"outlined"} size={"small"} error={Boolean(props.errors[props.name])}>
        <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
        <Controller id={props.name} control={props.control} name={props.name}
                    render={(_props) => <Select label={props.label} {..._props}>{buildItems()}</Select>}/>
        {props.errors[props.name] && <FormHelperText>{props.errors[props.name].message}</FormHelperText>}
    </FormControl>)
}

interface IProps<T> {
    name: string;
    label?: string;
    control: Control;
    errors: FieldErrors;
    dataSource?: T[];
    renderItem?: (item: T, index: number) => React.ReactNode;
    children: React.ReactNode;
}