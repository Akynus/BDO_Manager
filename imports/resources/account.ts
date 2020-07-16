import {Meteor} from "meteor/meteor";
import {Accounts} from "meteor/accounts-base";
import UserDao from "/server/dao/UserDao";

Accounts.config({});

if (Meteor.isClient) {

}

if (Meteor.isServer) {
    Accounts.validateNewUser(UserDao.onCreate);
}


