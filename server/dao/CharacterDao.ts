import {Meteor} from "meteor/meteor";
import Characters from "/imports/collections/CharacterCollection";
import Character from "/imports/models/Character";
import {Mongo} from "meteor/mongo";
import Future from "fibers/future";

const CharacterDao = {
    insert(object: Character): Mongo.ObjectID {
        const future = new Future<Mongo.ObjectID>();
        object.user = Meteor.userId()!;
        Characters.insert(object, function (error: Error, id: Mongo.ObjectID) {
            if (error) return future.throw(error);
            future.return(id);
        });
        return future.wait();
    },
    update(object: Character): void {
        const future = new Future<void>();
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
        }, {multi: false}, function (error: Error) {
            if (error) return future.throw(error);
            return future.return();
        });
        return future.wait();
    },
    get(id: Mongo.ObjectID): Character | undefined {
        return Characters.findOne({_id: id, user: Meteor.userId()!}, {
            fields: {
                user: 0
            }
        });
    },
    remove(id: Mongo.ObjectID): void {
        const future = new Future<void>();
        Characters.remove({
            _id: id, $and: [{
                user: Meteor.userId()!
            }]
        }, function (error: Error) {
            if (error) return future.throw(error);
            return future.return();
        });
        return future.wait();
    }
}

export default CharacterDao;