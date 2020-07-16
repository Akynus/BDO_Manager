import {Meteor} from "meteor/meteor";
import Settings from "/imports/collections/SettingCollection";
import EPublish from "/imports/objects/EPublish";

Meteor.publish(EPublish.SETTING, function () {
    return Settings.find({user: this.userId});
});