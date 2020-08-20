import {Meteor} from "meteor/meteor";
import Profiles from "/imports/collections/ProfileCollection";

const ProfileDao = {
    set(key: string, value: any): void {
        Profiles.update({
            user: {
                $eq: Meteor.userId()!
            }
        }, {$set: {[key]: value}}, {multi: false});
    }
}

export default ProfileDao;