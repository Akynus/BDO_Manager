import {Meteor} from "meteor/meteor";
import Future from "fibers/future";
import Horse from "/imports/models/Horse";
import {Mongo} from "meteor/mongo";
import Horses from "/imports/collections/HorseCollection";
import Characters from "/imports/collections/CharacterCollection";

const HorseDao = {
    insert(object: Horse): Mongo.ObjectID {
        const future = new Future<Mongo.ObjectID>();
        object.user = Meteor.userId()!;
        Horses.insert(object, function (error: Error, id: Mongo.ObjectID) {
            if (error) return future.throw(error);
            future.return(id);
        });
        return future.wait();
    },
    update(object: Horse): void {
        const future = new Future<void>();
        Horses.update({
            _id: object._id,
            user: {
                $eq: Meteor.userId()!
            }
        }, {
            $set: {
                name: object.name,
                level: object.level,
                speed: object.speed,
                turn: object.turn,
                brake: object.brake,
                accel: object.accel,
                type: object.type,
                gender: object.gender,
                krogdalo: object.krogdalo
            }
        }, {multi: false}, function (error: Error) {
            if (error) return future.throw(error);
            return future.return();
        });
        return future.wait();
    },
    remove(id: Mongo.ObjectID): void {
        const future = new Future<void>();

        new Promise((resolve, reject) => {
            Characters.update({
                user: {
                    $eq: Meteor.userId()!,
                },
                horse: {
                    $eq: id
                }
            }, {
                $unset: ["horse"]
            }, {multi: true}, function (error: any) {
                if (error) return reject(error);
                return resolve();
            });
        }).then(function () {
            return new Promise((resolve, reject) => {
                Horses.remove({
                    _id: id, $and: [{
                        user: Meteor.userId()!
                    }]
                }, function (error: Error) {
                    if (error) return reject(error);
                    return resolve();
                });
            });
        }).then(() => future.return()).catch(reason => future.throw(reason));

        return future.wait();
    }
}

export default HorseDao;