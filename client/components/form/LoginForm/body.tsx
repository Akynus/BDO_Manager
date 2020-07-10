import * as React from "react";
import {Card, CardContent, Typography, WithStyles, Divider} from "@material-ui/core";
import style from "./style";
import {IComponent} from "client/resources/Interfaces";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {}
    }

    render() {
        const {classes, t} = this.props;
        return <Card className={classes.root} elevation={10}>
            <CardContent className={classes.content}>
                <Typography className={classes.titleCard} gutterBottom variant="h6">
                    {t('title.login')}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                    {t('description.login')}
                </Typography>
                <Divider variant="middle"/>
            </CardContent>
        </Card>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {
}

interface IState {
}