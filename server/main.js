import {Accounts} from "meteor/accounts-base";
import SimpleSchema from 'simpl-schema';
import UserDao from "/server/dao/UserDao";
import "/imports/resources/account";
import "/server/api/Publisher";
import "/server/api/Method";

SimpleSchema.extendOptions(['index', 'unique', 'denyInsert', 'denyUpdate']);

Accounts.validateNewUser(UserDao.onCreate);
