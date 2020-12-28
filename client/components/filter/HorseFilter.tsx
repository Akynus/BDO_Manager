import * as React from "react";
import * as yup from "yup";
import EHorse from "/imports/enumerables/EHorse";
import {useForm} from "react-hook-form";
import Horse from "/imports/models/Horse";
import {yupResolver} from "@hookform/resolvers";
import {Grid, MenuItem, Typography} from "@material-ui/core";
import TextField from "/client/components/fields/TextField";
import {useTranslation} from "react-i18next";
import SelectField from "/client/components/fields/SelectField";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {width: '100%'}
}), {classNamePrefix: 'horse-filter'});

export interface HorseFilterRef {
    get(): Promise<Horse>;

    clear(): void;
}

const HorseFilter = React.forwardRef<HorseFilterRef, IProps>((props, ref) => {
    React.useImperativeHandle(ref, () => ({get: onSubmit, clear: onClear}));
    const classes = useStyles();
    const schema = yup.object().shape({
        name: yup.string().max(30),
        type: yup.string().oneOf(Object.keys(EHorse)),
        gender: yup.string().oneOf(['male', 'female']),
        krogdalo: yup.boolean().default(false)
    });
    const {control, errors, reset} = useForm<Horse>({
        resolver: yupResolver(schema), defaultValues: {},
    });
    const {t} = useTranslation();

    function onSubmit(): Promise<Horse> {
        return new Promise<Horse>((resolve, reject) => {

        });
    }

    function onClear(): void {
        reset();
    }

    function emptyItem(): React.ReactElement {
        return <MenuItem key={''} value={''}>
            <Typography color={"textSecondary"}>{t('action.none')}</Typography>
        </MenuItem>;
    }

    return <div className={classes.root}>
        <form>
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={8}>
                    <TextField label={String(t('form.horse.name'))} name={'name'} control={control} errors={errors}/>
                </Grid>
                <Grid item={true} xs={4}>
                    <SelectField<string> label={String(t('form.horse.type'))}
                                         name={'type'} control={control}
                                         errors={errors}>
                        {emptyItem()}
                        <MenuItem value={EHorse.COMMON}>{t('item.horse.common')}</MenuItem>
                        <MenuItem value={EHorse.DONKEY}>{t('item.horse.donkey')}</MenuItem>
                        <MenuItem value={EHorse.ARDUANATT}>{t('item.horse.arduanatt')}</MenuItem>
                        <MenuItem value={EHorse.DINE}>{t('item.horse.dine')}</MenuItem>
                        <MenuItem value={EHorse.DOOM}>{t('item.horse.doom')}</MenuItem>
                    </SelectField>
                </Grid>
                <Grid item={true} xs={4}>
                    <SelectField<boolean> label={String(t('form.horse.krogdalo'))}
                                          name={'krogdalo'} control={control}
                                          errors={errors}>
                        {emptyItem()}
                        {/* @ts-ignore*/}
                        <MenuItem value={false}>{t('action.no')}</MenuItem>
                        {/* @ts-ignore*/}
                        <MenuItem value={true}>{t('action.yes')}</MenuItem>
                    </SelectField>
                </Grid>
                <Grid item={true} xs={4}>
                    <SelectField<string> label={String(t('form.horse.gender'))}
                                         name={'gender'} control={control}
                                         errors={errors}>
                        {emptyItem()}
                        <MenuItem value={"male"}>{t('item.gender.male')}</MenuItem>
                        <MenuItem value={"female"}>{t('item.gender.female')}</MenuItem>
                    </SelectField>
                </Grid>
            </Grid>
        </form>
    </div>
});

interface IProps {
}

export default HorseFilter;