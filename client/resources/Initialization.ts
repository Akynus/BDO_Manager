import {Session} from "meteor/session";
import {Accounts} from "meteor/accounts-base";
import {SessionKeys} from "/imports/objects/GlobalVars";
import EPublish from "/imports/objects/EPublish";

Tracker.autorun(function () {
    Session.set(SessionKeys.DRAWER_HANDLE, true);
    Session.set(SessionKeys.SETTING_READY, false)
});

let handleSetting: Meteor.SubscriptionHandle;

Accounts.onLogin(function () {
    handleSetting = Meteor.subscribe(EPublish.SETTING, {
        onReady: () => Session.set(SessionKeys.SETTING_READY, true),
        onError: console.error,
    });
});

Accounts.onLogout(function () {
    if (handleSetting) handleSetting.stop();
});