import {Meteor} from "meteor/meteor";
import EMethod from "/imports/objects/EMethod";
import {ITheming} from "/imports/models/Setting";
import SettingDao from "/server/dao/SettingDao";

Meteor.methods({
    [EMethod.SET_THEME]: (key: keyof ITheming, value: any) => {
        SettingDao.setTheme(key, value);
    }
});