import {ComponentClass, FunctionComponent, ComponentType} from "react";
import {Theme, withStyles} from "@material-ui/core";
import {withTranslation} from "react-i18next";

interface IParams {
    style: (theme: Theme) => any;
}

export default function <T = any>(component: ComponentType<any>, params: IParams): ComponentClass<any, any> | FunctionComponent<any> {
    let element: any = withStyles(params.style, {classNamePrefix: 'bdo'})(component);
    element = withTranslation()(element);
    return element;
}