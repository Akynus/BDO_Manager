import * as React from "react";
import {Dialog, DialogContent, DialogTitle, Grid} from "@material-ui/core";
import {useMongoFetch} from "react-meteor-hooks";
import Characters from "/imports/collections/CharacterCollection";
import Character from "/imports/models/Character";
import CharacterMiniCard from "/client/components/layout/CharacterMiniCard";
import {useTranslation} from "react-i18next";

export interface CharacterSelectorRef {
    open: () => void;
}

const CharacterSelector = React.forwardRef<CharacterSelectorRef, IProps>((props, ref) => {
    const characters: Character[] = useMongoFetch(Characters.find());
    const [opened, setOpened] = React.useState<boolean>(false);
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

    return <Dialog open={opened} fullWidth={true} maxWidth={"sm"} onClose={onClose}>
        <DialogTitle>{t('item.characters')}</DialogTitle>
        <DialogContent>
            <Grid container={true} spacing={2}>
                {characters.map((value, index) => {
                    return <Grid key={index} item={true} xs={12} sm={6} md={4}>
                        <CharacterMiniCard data={value}/>
                    </Grid>
                })}
            </Grid>
        </DialogContent>
    </Dialog>
});

interface IProps {
}

export default CharacterSelector;