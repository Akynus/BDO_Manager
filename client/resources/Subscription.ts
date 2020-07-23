import {useTracker} from 'meteor/react-meteor-data';
import EPublish from "/imports/enumerables/EPublish";


export default function Subscription(sub: EPublish, ...args: any[]): Meteor.SubscriptionHandle {
    return useTracker(() => {
        return Meteor.subscribe(sub, ...args);
    }, [sub]);
}