import {Meteor} from "meteor/meteor";
import {Accounts} from "meteor/accounts-base";
import {ServiceConfiguration} from "meteor/service-configuration";
import Services from "/imports/resources/services";

Accounts.config({
    forbidClientAccountCreation: false,
});

if (Meteor.isClient) {

}

if (Meteor.isServer) {
    ServiceConfiguration.configurations.upsert(
        {service: 'discord'},
        Services.discord
    );
}