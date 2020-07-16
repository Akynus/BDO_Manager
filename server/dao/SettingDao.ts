import {Meteor} from "meteor/meteor";
import {ITheming} from "/imports/models/Setting";
import Settings from "/imports/collections/SettingCollection";

const SettingDao = {
    setTheme(key: keyof ITheming, value: any): void {
        Settings.update({
            user: {
                $eq: Meteor.userId()!
            }
        }, {$set: {[`theming.${key}`]: value}}, {multi: false});
    }
}

export default SettingDao;