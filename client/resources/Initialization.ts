import {Session} from "meteor/session";
import {SessionKeys} from "/client/resources/GlobalVars";

Tracker.autorun(function () {
    Session.set(SessionKeys.THEME_STYLE, "light");
    Session.set(SessionKeys.PRIMARY_COLOR,"#5c6bc0");
    Session.set(SessionKeys.SECONDARY_COLOR,"#2196f3");
    Session.set(SessionKeys.DRAWER_HANDLE, true);
});