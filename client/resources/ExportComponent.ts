import {ComponentClass, FunctionComponent, ComponentType} from "react";
import {Theme, withStyles} from "@material-ui/core";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router-dom";

interface IParams {
    style: (theme: Theme) => any;
}

export default function <T = any>(component: ComponentType<any>, params: IParams): ComponentClass<T, any> | FunctionComponent<any> {
    let element: any = withRouter(component);
    element = withStyles(params.style, {classNamePrefix: 'jss-cls', name: 'jss-cls'})(element);
    element = withTranslation()(element);
    return element;
}