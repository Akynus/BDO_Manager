import * as React from "react";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import {Controller} from "react-hook-form";
import {Control, FieldErrors} from "react-hook-form/dist/types/form";
import {useTranslation} from "react-i18next";

export default function SelectField<T = Object>(props: IProps<T>): React.ReactElement<IProps<T>> {
    const {t} = useTranslation();

    function emptyItem(): React.ReactElement {
        return <MenuItem key={''} value={''}>
            <Typography color={"textSecondary"}>{t('action.none')}</Typography>
        </MenuItem>;
    }

    function buildItems(): React.ReactNode[] | React.ReactNode {
        if (props.dataSource && props.renderItem) {
            const items = props.dataSource.map(props.renderItem);
            if (props.allowEmpty) {
                return Array().concat([emptyItem()], items);
            } else {
                return items;
            }
        } else {
            return props.children;
        }
    }

    return (<FormControl disabled={props.disabled} fullWidth={true} variant={"outlined"} size={"small"}
                         error={Boolean(props.errors[props.name])}>
        <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
        <Controller id={props.name} control={props.control} name={props.name}
                    render={(_props) => <Select label={props.label} value={_props.value} onChange={_props.onChange} onBlur={_props.onBlur}>{buildItems()}</Select>}/>
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
    allowEmpty?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
}