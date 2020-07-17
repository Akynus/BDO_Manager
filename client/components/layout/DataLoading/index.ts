import ExportComponent from "/client/resources/ExportComponent";
import {SettingLoader} from "./body";
import style from "./style";

export default class DataLoading {
    static Setting = ExportComponent(SettingLoader, {style});
};