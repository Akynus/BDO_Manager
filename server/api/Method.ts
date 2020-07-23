import {Meteor} from "meteor/meteor";
import EMethod from "/imports/enumerables/EMethod";
import {ITheming} from "/imports/models/Setting";
import SettingDao from "/server/dao/SettingDao";
import Character from "/imports/models/Character";
import CharacterDao from "/server/dao/CharacterDao";

Meteor.methods({
    [EMethod.UPDATE_THEME]: (key: keyof ITheming, value: any) => {
        SettingDao.setTheme(key, value);
    },
    [EMethod.INSERT_CHARACTER]: (object: Character) => {
        CharacterDao.insert(object);
    },
    [EMethod.UPDATE_CHARACTER]: (object: Character) => {
        CharacterDao.update(object);
    },
});