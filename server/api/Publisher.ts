import {Meteor} from "meteor/meteor";
import Settings from "/imports/collections/SettingCollection";
import EPublish from "/imports/enumerables/EPublish";
import Characters from "/imports/collections/CharacterCollection";
import Horses from "/imports/collections/HorseCollection";

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