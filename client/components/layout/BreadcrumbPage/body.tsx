import * as React from "react";
import {Box, Breadcrumbs, Chip, Icon, Typography, WithStyles} from "@material-ui/core";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";
import clsx from "clsx";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.goRoute = this.goRoute.bind(this);
    }

    private goRoute(path: string): void {
        const {history} = this.props;
        history.push({pathname: path});
    }

    private getPaths(): string[] {
        const {location} = this.props;
        return location.pathname.split('/').filter((x) => x);
    }

    render() {
        const {t, title, classes} = this.props;
        return <Box component={"div"}>
            <Typography color={"textPrimary"} variant={"h5"}>
                {title}
            </Typography>
            <Breadcrumbs>
                <Chip onClick={this.goRoute.bind(this, '/home')} variant={"outlined"} size={"small"}
                      icon={<Icon className={clsx(['fas fa-home fa-sm', classes.iconHome])}/>}
                      label={t('item.home')}/>

                {this.getPaths().map(value => {
                    return <Chip variant={"outlined"} size={"small"} label={t(`item.${value}`)}/>
                })}
            </Breadcrumbs>
        </Box>;
    }
}

export interface IBreadcrumbPage {
    title: string;
}

interface IProps extends IBreadcrumbPage, IComponent, WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
}