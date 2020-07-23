import * as React from "react";
import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    Chip,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    WithStyles
} from "@material-ui/core";
import style from "./style";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import IComponent from "/imports/interfaces/IComponent";

import CharacterForm from "/client/components/form/CharacterForm";

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.onOpenForm = this.onOpenForm.bind(this);
        this.onCloseForm = this.onCloseForm.bind(this);

        this.state = {
            showForm: false
        }
    }

    private onOpenForm(): void {
        this.setState({showForm: true});
    }

    private onCloseForm(): void {
        this.setState({showForm: false});
    }

    private content(): React.ReactElement {
        const {classes} = this.props;
        return <div className={classes.boxFlex}>
            <div className={classes.boxList}>
                <div className={classes.boxListActions}>
                    <Grid container={true} spacing={1}>
                        <Grid item={true} xs={12}>
                            <Button onClick={this.onOpenForm} fullWidth={true} variant={"contained"}
                                    color={"secondary"}>Novo personagem</Button>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"body2"} color={"textSecondary"} align={"right"}>3/6
                                Personagens</Typography>
                        </Grid>
                    </Grid>
                </div>
                <Divider/>
                <List disablePadding={true}>
                    <ListItem button={true}>
                        <ListItemAvatar>
                            <Badge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                                   badgeContent={<Avatar className={classes.smallAvatar}
                                                         src={"https://oyster.ignimgs.com/mediawiki/apis.ign.com/black-desert-online/8/87/Wizardicon.jpg"}/>}>
                                <Avatar>62</Avatar>
                            </Badge>
                        </ListItemAvatar>
                        <ListItemText primary={<Box component={"span"}>
                            {"Zart"} <Chip size={"small"} color={"primary"} label={'Principal'}/>
                        </Box>} secondary={'Mago'}/>
                    </ListItem>
                    <ListItem button={true}>
                        <ListItemAvatar>
                            <Avatar>62</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Box component={"span"}>
                            {"Doheyong"}
                        </Box>} secondary={'Striker'}/>
                    </ListItem>
                    <ListItem button={true}>
                        <ListItemAvatar>
                            <Avatar>62</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={<Box component={"span"}>
                            {"Frondarth"}
                        </Box>} secondary={'Guardiã'}/>
                    </ListItem>
                </List>
            </div>
            <div className={classes.boxContent}>Test</div>
        </div>
    }

    render() {
        const {classes, t} = this.props;
        return <Container maxWidth="lg" className={classes.root}>
            <BreadcrumbPage title={t('item.characters')}/>
            <Card elevation={10} className={classes.content}>
                {this.content()}
            </Card>
            <CharacterForm/>
        </Container>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
    showForm: boolean;
}