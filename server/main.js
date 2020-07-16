import SimpleSchema from 'simpl-schema';
import "/imports/resources/account";
import "/server/api/Publisher";
import "/server/api/Method";

SimpleSchema.extendOptions(['index', 'unique', 'denyInsert', 'denyUpdate']);
