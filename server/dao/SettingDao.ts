import {Meteor} from "meteor/meteor";
import Settings from "/imports/collections/SettingCollection";

const SettingDao = {
    set(key: string, value: any): void {
        Settings.update({
            user: {
                $eq: Meteor.userId()!
            }
        }, {$set: {[key]: value}}, {multi: false});
    }
}

export default SettingDao;