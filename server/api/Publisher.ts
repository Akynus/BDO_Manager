import {Meteor} from "meteor/meteor";
import Settings from "/imports/collections/SettingCollection";
import EPublish from "/imports/enumerables/EPublish";
import Characters from "/imports/collections/CharacterCollection";
import Horses from "/imports/collections/HorseCollection";
import Profiles from "/imports/collections/ProfileCollection";

// @ts-ignore
Meteor.publish(null, function () {
    return Meteor.users.find({_id: this.userId});
});

Meteor.publish(EPublish.PROFILE, function () {
    return Profiles.find({user: this.userId}, {
        fields: {
            user: 0
        }
    });
});

Meteor.publish(EPublish.SETTING, function () {
    return Settings.find({user: this.userId}, {
        fields: {
            user: 0
        }
    });
});

Meteor.publish(EPublish.CHARACTERS, function () {
    return Characters.find({user: this.userId}, {
        fields: {
            user: 0
        }
    });
});

Meteor.publish(EPublish.HORSES, function () {
    return Horses.find({user: this.userId}, {
        fields: {
            user: 0
        }
    });
});