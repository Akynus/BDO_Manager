import {Meteor} from "meteor/meteor";
import {Accounts} from "meteor/accounts-base";

Accounts.config({});

if (Meteor.isServer) {
    Accounts.validateNewUser((user: Meteor.User) => {
        console.log(user);
        return true;
    });
}


