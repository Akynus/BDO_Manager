import {InternalNamePath} from "rc-field-form/es/interface";

export interface IMessageForm {
    name: InternalNamePath;
    errors: string[];
}

export default function MessageForm(arr: IMessageForm[] = [], field: string) {
    return class {
        public static isError(): boolean {
            const find = arr.find(value => {
                return value.name.find(value1 => {
                    return value1 === field;
                });
            });
            return Boolean(find);
        }

        public static textError(): string | null {
            const find = arr.find(value => {
                return value.name.find(value1 => {
                    return value1 === field;
                }) && value.errors.length > 0;
            });

            return find ? find.errors[0] : null;
        }
    }
}