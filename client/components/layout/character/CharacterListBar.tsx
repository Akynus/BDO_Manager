import * as React from "react";
import Character from "/imports/models/Character";
import {AppBar, Avatar, Icon, Tab, Tabs} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Mongo} from "meteor/mongo";
import ICharacterClass from "/imports/interfaces/ICharacterClass";
import ClassContext from "/imports/objects/ClassContext";
import EClasses from "/imports/enumerables/EClasses";
import clsx from "clsx";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    bar: {
        borderRadius: theme.shape.borderRadius
    },
    iconAdd: {
        width: 40,
        height: 40
    }
}), {classNamePrefix: 'character-list-bar'});

export default function CharacterListBar(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();

    function classType(classKey: EClasses): ICharacterClass {
        return ClassContext[classKey];
    }

    function itemList(item: Character): React.ReactNode {
        const _class = classType(item.class);
        return <Tab key={String(item._id)} value={item._id} label={item.name}
                    icon={<Avatar variant={"square"} sizes={'small'} src={_class.icon}/>}/>
    }

    function addItem(): React.ReactNode {
        return <Tab key={'add-item'} value={null} disabled={props.disable}
                    icon={<Icon className={clsx(['mdi mdi-account-multiple-plus', classes.iconAdd])}/>}
                    unselectable={"on"} label={t('action.insert_character')}/>
    }

    function buildList(): React.ReactNode {
        return <Tabs variant="scrollable" scrollButtons="on"
                     indicatorColor="primary" textColor="secondary"
                     value={props.selected}
                     onChange={(event, value) => props.onSelect(value)}>
            {props.datasource.map(itemList).concat(props.disable ? [] : [addItem()])}
        </Tabs>
    }

    return <AppBar className={classes.bar} position="relative" color="inherit">
        {buildList()}
    </AppBar>
}

interface IProps {
    selected?: Mongo.ObjectID | undefined;
    datasource: Character[];
    disable?: boolean;
    onSelect: (id: Mongo.ObjectID) => void;
}