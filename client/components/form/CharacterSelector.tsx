import * as React from "react";
import {Dialog, DialogContent, DialogTitle, Grid, Link} from "@material-ui/core";
import {useMethod, useMongoFetch} from "react-meteor-hooks";
import Characters from "/imports/collections/CharacterCollection";
import Character from "/imports/models/Character";
import CharacterMiniCard from "/client/components/layout/CharacterMiniCard";
import {Trans, useTranslation} from "react-i18next";
import {Alert, AlertTitle} from "@material-ui/lab";
import _CharacterForm, {CharacterFormRef} from "/client/components/form/CharacterForm";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from "notistack";

export interface CharacterSelectorRef {
    open: () => void;
}

const CharacterSelector = React.forwardRef<CharacterSelectorRef, IProps>((props, ref) => {
    const characters: Character[] = useMongoFetch(Characters.find());
    const [opened, setOpened] = React.useState<boolean>(false);
    const {call} = useMethod(EMethod.UPDATE_PROFILE);
    const {enqueueSnackbar} = useSnackbar();
    const form = React.createRef<CharacterFormRef>();
    const {t} = useTranslation();

    React.useImperativeHandle(ref, () => ({
        open: onOpen
    }));

    function onOpen(): void {
        setOpened(true);
    }

    function onClose(): void {
        setOpened(false);
    }

    function emptyMessage(): React.ReactNode {
        return <Grid item={true} xs={12}>
            <Alert variant="outlined" severity="info">
                <AlertTitle>{t('title.no_characters')}</AlertTitle>
                <Trans i18nKey={'message.no_characters'}>
                    You have no characters. <Link component="button" variant="body2" onClick={onCreate}>Click
                    here</Link> to create a new
                    one.
                </Trans>
            </Alert>
        </Grid>;
    }

    function onCreate(): void {
        if (form.current) {
            form.current.open(undefined);
        }
    }

    function onSelect(data: Character): void {
        call('mainCharacter', data._id).catch((reason) => {
            console.error(reason);
            enqueueSnackbar(t('message.error_update_profile'), {variant: "error"});
        });
        onClose();
    }

    return <div>
        <Dialog open={opened} fullWidth={true} maxWidth={"sm"} onClose={onClose}>
            <DialogTitle>{t('item.characters')}</DialogTitle>
            <DialogContent>
                <Grid container={true} spacing={2}>
                    {characters.map((value, index) => {
                        return <Grid key={index} item={true} xs={12} sm={6} md={4}>
                            <CharacterMiniCard onSelect={() => onSelect(value)} data={value}/>
                        </Grid>
                    })}
                    {characters.length == 0 && emptyMessage()}
                </Grid>
            </DialogContent>
        </Dialog>
        <_CharacterForm ref={form}/>
    </div>
});

interface IProps {
}

export default CharacterSelector;