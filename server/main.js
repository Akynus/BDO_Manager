import {Accounts} from "meteor/accounts-base";
import SimpleSchema from 'simpl-schema';
import UserDao from "/server/dao/UserDao";
import "/imports/resources/account";
import "/server/api/Publisher";
import "/server/api/Method";
import moment from "moment-timezone";

SimpleSchema.extendOptions(['index', 'unique', 'denyInsert', 'denyUpdate']);

//<editor-folder defaultstate="collapsed" desc="Authentication params">
Accounts.onCreateUser(UserDao.onCreate);
Accounts.onLogin(UserDao.onLogin);
Accounts.validateNewUser(UserDao.validateNewUser);
//</editor-folder>

Meteor.startup(function () {
    console.log('Timezone server:', moment.tz.guess(true));
    console.log('Webserver is running');
});
