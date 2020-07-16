import {Session} from "meteor/session";
import {Accounts} from "meteor/accounts-base";
import {SessionKeys} from "/imports/objects/GlobalVars";
import EPublish from "/imports/objects/EPublish";

Tracker.autorun(function () {
    Session.set(SessionKeys.DRAWER_HANDLE, true);
});

let subSetting: Meteor.SubscriptionHandle;

Accounts.onLogin(function () {
    subSetting = Meteor.subscribe(EPublish.SETTING, {
        onError: console.log,
    });
});

Accounts.onLogout(function () {
    if (subSetting) subSetting.stop();
});