import * as React from "react";
import {
    Breadcrumbs, Button,
    Card,
    CardContent,
    CardHeader,
    Chip,
    Container, Grid,
    Icon,
    WithStyles
} from "@material-ui/core";
import style from "./style";
import SearchInput from "/client/components/layout/SearchInput";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import IComponent from "/imports/interfaces/IComponent";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    private header(): React.ReactElement {
        const {t} = this.props;
        return <CardHeader title={t('item.characters')} subheader={<Breadcrumbs>
            <Chip size={"small"} icon={<Icon className={'fas fa-home'}/>} label={t('item.home')}/>
            <Chip size={"small"} label={t('item.characters')}/>
        </Breadcrumbs>}/>;
    }

    private content(): React.ReactElement {
        const {classes, t} = this.props;
        return <CardContent className={classes.content}>
            <Grid container={true} spacing={2} alignItems={"center"}>
                <Grid item={true} md={6}>
                    <SearchInput/>
                </Grid>
                <Grid item={true}>
                    <Button startIcon={<Icon className={'far fa-plus-square'}/>} variant={"contained"}
                            color={"primary"}>{t('action.insert')}</Button>
                </Grid>
            </Grid>
        </CardContent>
    }

    render() {
        const {classes} = this.props;
        return <Container maxWidth="lg" className={classes.root}>

            <BreadcrumbPage/>

            <Card elevation={10} className={classes.content}>
                {this.header()}
                {this.content()}
            </Card>
        </Container>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {

}