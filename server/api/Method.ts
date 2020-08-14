import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import EMethod from "/imports/enumerables/EMethod";
import SettingDao from "/server/dao/SettingDao";
import Character from "/imports/models/Character";
import CharacterDao from "/server/dao/CharacterDao";
import Horse from "/imports/models/Horse";
import HorseDao from "/server/dao/HorseDao";

Meteor.methods({
    //<editor-folder defaultstate="collapsed" desc="Setting">
    [EMethod.UPDATE_SETTING]: (key: string, value: any) => {
        if (!Meteor.userId()) throw new Meteor.Error(403);
        SettingDao.set(key, value);
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
    [EMethod.INSERT_HORSE](object: Horse) {
        if (!Meteor.userId()) throw new Meteor.Error(403);
        return HorseDao.insert(object);
    },
    [EMethod.UPDATE_HORSE](object: Horse) {
        if (!Meteor.userId()) throw new Meteor.Error(403);
        HorseDao.update(object);
    },
    [EMethod.REMOVE_HORSE](id: Mongo.ObjectID) {
        if (!Meteor.userId()) throw new Meteor.Error(403);
        HorseDao.remove(id);
    }
    //</editor-folder>
});