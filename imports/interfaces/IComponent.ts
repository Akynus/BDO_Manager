import {RouteComponentProps} from "react-router";

export default interface IComponent extends RouteComponentProps {
    t: (key: string) => string;
}