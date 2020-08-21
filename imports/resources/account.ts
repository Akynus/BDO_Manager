import {Meteor} from "meteor/meteor";
import {Accounts} from "meteor/accounts-base";
import {ServiceConfiguration} from "meteor/service-configuration";

Accounts.config({
    forbidClientAccountCreation: false,
});

if (Meteor.isClient) {

}

if(Meteor.isServer){
    ServiceConfiguration.configurations.upsert(
        { service: 'discord' },
        {
            $set: {
                loginStyle: "popup",
                clientId: "511848483620257792",
                secret: "YvkhXIsbfWZGtuUgChANO6jvbTO1dnlX"
            }
        }
    );
}