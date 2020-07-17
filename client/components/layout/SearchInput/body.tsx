import * as React from "react";
import {Icon, InputBase, Paper, WithStyles} from "@material-ui/core";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";
import clsx from "clsx";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }


    render() {
        const {classes, t} = this.props;
        return <Paper elevation={2} className={classes.root}>
            <InputBase startAdornment={<Icon className={clsx(['fas fa-search', classes.iconSearch])}/>}
                       className={classes.input}
                       placeholder={t('description.searchField')}/>
        </Paper>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
}