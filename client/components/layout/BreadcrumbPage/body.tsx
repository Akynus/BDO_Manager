import * as React from "react";
import {Box, Breadcrumbs, Chip, Icon, Typography, WithStyles} from "@material-ui/core";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }


    render() {
        const {t} = this.props;
        return <Box component={"div"}>
            <Typography color={"textPrimary"} variant={"h5"}>
                Personagens
            </Typography>
            <Breadcrumbs>
                <Chip variant={"outlined"} size={"small"} icon={<Icon className={'fas fa-home'}/>} label={t('item.home')}/>
                <Chip variant={"outlined"} size={"small"} label={t('item.characters')}/>
            </Breadcrumbs>
        </Box>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
}