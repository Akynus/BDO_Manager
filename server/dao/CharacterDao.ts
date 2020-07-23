import {Meteor} from "meteor/meteor";
import Characters from "/imports/collections/CharacterCollection";
import Character from "/imports/models/Character";

const CharacterDao = {
    insert(object: Character): void {
        object.user = Meteor.userId()!;
        Characters.insert(object);
    },
    update(object: Character): void {
        Characters.update({
            _id: object._id,
            user: {
                $eq: Meteor.userId()!
            }
        }, {
            $set: {
                name: object.name,
                level: object.level,
                class: object.class,
                combatStyle: object.combat,
                atkPre: object.atkPre,
                atkAwk: object.atkAwk,
                defense: object.defense
            }
        }, {multi: false})
    }
}

export default CharacterDao;