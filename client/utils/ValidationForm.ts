import {Rule} from "rc-field-form/lib/interface";
import LanguageConfig from "/client/resources/config/LanguageConfig";

export default class ValidationForm {
    static REQUIRED: Rule = {
        message: LanguageConfig.get().t('validation.required'),
        required: true
    }

    static MIN_LENGTH: (length: number) => Rule = length => {
        return {
            message: LanguageConfig.get().t('validation.required'),
            min: length
        }
    }

    static MAX_LENGTH: (length: number) => Rule = length => {
        return {
            message: LanguageConfig.get().t('validation.required'),
            max: length
        }
    }
}