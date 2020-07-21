import * as React from "react";
import {
    Fade,
    Dialog,
    WithStyles,
    Container,
    ListItem,
    ListItemText,
    Divider,
    Grid,
    Card,
    Tooltip, Typography, Box, ListItemAvatar, Avatar, CardMedia, CardContent
} from "@material-ui/core";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";
import {TransitionProps} from "@material-ui/core/transitions";
import {ToggleButton} from "@material-ui/lab";
import CharacterClass from "/imports/objects/CharacterClass";
import ECharacterClass from "/imports/objects/ECharacterClass";

const TransitionDialog = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});

export default class extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.isSelectedClass = this.isSelectedClass.bind(this);

        this.state = {
            opened: true,
            selectedClass: ECharacterClass.WARRIOR
        }
    }

    private isSelectedClass(value: ECharacterClass): boolean {
        return this.state.selectedClass == value;
    }

    private onSelectClass(value: ECharacterClass): void {
        this.setState({selectedClass: value});
    }

    private selectClass(): React.ReactElement {
        const {classes} = this.props;
        const {selectedClass} = this.state;
        return <Card className={classes.classForm}>
            <CardMedia className={classes.classImg} image={CharacterClass[selectedClass]!.introImg} title={CharacterClass[selectedClass]!.name}/>
            <CardContent>
                <Typography variant={"body2"}>Select your class</Typography>
                <Grid container={true} spacing={1}>
                    {Object.keys(CharacterClass).map(value => {
                        return <Grid key={CharacterClass[value].value} item={true}>
                            <Tooltip title={CharacterClass[value].name} placement={"top"}>
                                <ToggleButton onClick={this.onSelectClass.bind(this, CharacterClass[value].value)}
                                              className={classes.toggleButton}>
                                    <img className={classes.classIcon}
                                         src={CharacterClass[value].icon}/>
                                </ToggleButton>
                            </Tooltip>
                        </Grid>
                    })}
                </Grid>
            </CardContent>
        </Card>
    }

    private formClass(): React.ReactElement {
        const {classes} = this.props;
        const {selectedClass} = this.state;

        return <Card className={classes.classForm}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={CharacterClass[selectedClass]!.icon}/>
                </ListItemAvatar>
                <ListItemText primary={CharacterClass[selectedClass]!.name} secondary={'Awakening'}/>
            </ListItem>
            <Divider/>
        </Card>
    }

    render() {
        const {classes} = this.props;
        const {opened} = this.state;
        return <Dialog open={opened} fullScreen={true} TransitionComponent={TransitionDialog}>
            <Container maxWidth={"md"}>
                <ListItem>
                    <ListItemText primaryTypographyProps={{variant: "h6"}} primary={'New Character'}
                                  secondary={'Select your class and gear score'}/>
                </ListItem>
                <Divider/>
                <Grid className={classes.content} container={true} spacing={2}>
                    <Grid item={true} md={5}>
                        {this.selectClass()}
                    </Grid>
                    <Grid item={true} md={7}>
                        {this.formClass()}
                    </Grid>
                </Grid>
            </Container>
        </Dialog>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {

}

interface IState {
    opened: boolean;
    selectedClass: ECharacterClass;
}