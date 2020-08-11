import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import EMethod from "/imports/enumerables/EMethod";
import {ITheming} from "/imports/models/Setting";
import SettingDao from "/server/dao/SettingDao";
import Character from "/imports/models/Character";
import CharacterDao from "/server/dao/CharacterDao";

Meteor.methods({
    //<editor-folder defaultstate="collapsed" desc="Setting">
    [EMethod.UPDATE_THEME]: (key: keyof ITheming, value: any) => {
        if (!Meteor.userId()) throw new Meteor.Error(403);
        SettingDao.setTheme(key, value);
    },
    //</editor-folder>

    //<editor-folder defaultstate="collapsed" desc="Character">
    [EMethod.INSERT_CHARACTER]: (object: Character) => {
        if (!Meteor.userId()) throw new Meteor.Error(403);
        return CharacterDao.insert(object);
    },
    [EMethod.UPDATE_CHARACTER]: (object: Character) => {
        if (!Meteor.userId()) throw new Meteor.Error(403);
        CharacterDao.update(object);
    },
    [EMethod.GET_CHARACTER]: (id: Mongo.ObjectID) => {
        if (!Meteor.userId()) throw new Meteor.Error(403);
        return CharacterDao.get(id);
    },
    [EMethod.REMOVE_CHARACTER]: (id: Mongo.ObjectID) => {
        if (!Meteor.userId()) throw new Meteor.Error(403);
        CharacterDao.remove(id);
    },
    //</editor-folder>

    //<editor-folder defaultstate="collapsed" desc="Horse">

    //</editor-folder>
});