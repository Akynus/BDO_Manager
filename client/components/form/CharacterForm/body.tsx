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
    Tooltip,
    Typography,
    ListItemAvatar,
    Avatar,
    CardMedia,
    CardContent,
    TextField,
    Box,
    MenuItem, ListItemSecondaryAction, Chip, Button, IconButton, Icon
} from "@material-ui/core";
import style from "./style";
import IComponent from "/imports/interfaces/IComponent";
import {TransitionProps} from "@material-ui/core/transitions";
import {ToggleButton} from "@material-ui/lab";
import CharacterClass from "/imports/objects/CharacterClass";
import ECharacterClass from "/imports/objects/ECharacterClass";
import clsx from "clsx";
import Form, {Field, FormInstance} from "rc-field-form";
import ValidationForm from "/client/utils/ValidationForm";
import MessageForm, {IMessageForm} from "/client/utils/MessageForm";

const TransitionDialog = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Fade timeout={1000} ref={ref} {...props} />;
});

export default class extends React.Component<IProps, IState> {
    form: FormInstance;

    constructor(props: IProps) {
        super(props);

        this.isSelectedClass = this.isSelectedClass.bind(this);

        this.state = {
            opened: true,
            errors: [],
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
            <CardMedia className={classes.classImg} image={CharacterClass[selectedClass]!.introImg}
                       title={CharacterClass[selectedClass]!.name}/>
            <CardContent>
                <Grid container={true} spacing={1}>
                    <Grid item={true} xs={12}>
                        <Typography variant={"subtitle2"}>Select your class</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item={true} container={true} spacing={1} xs={12}>
                        {Object.keys(CharacterClass).map(value => {
                            return <Grid key={CharacterClass[value].value} item={true}>
                                <Tooltip title={CharacterClass[value].name} placement={"top"}>
                                    <ToggleButton onClick={this.onSelectClass.bind(this, CharacterClass[value].value)}
                                                  className={classes.toggleButton}
                                                  selected={this.isSelectedClass(CharacterClass[value].value)}>
                                        <img className={clsx([classes.classIcon, classes.classIconBrightness])}
                                             src={CharacterClass[value].icon}/>
                                    </ToggleButton>
                                </Tooltip>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    }

    private formClass(): React.ReactElement {
        const {classes} = this.props;
        const {selectedClass, errors} = this.state;

        return <Card className={classes.classForm}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={classes.classIconBrightness} src={CharacterClass[selectedClass]!.icon}/>
                </ListItemAvatar>
                <ListItemText primary={CharacterClass[selectedClass]!.name} secondary={'Awakening'}/>
                <ListItemSecondaryAction>
                    <Chip label={"269 GS"}/>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <Box className={classes.formPadding}>
                <Form name={'character'} ref={(ref: FormInstance) => this.form = ref}>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12}>
                            <Typography variant={"subtitle2"}>Description</Typography>
                            <Divider/>
                        </Grid>
                        <Grid item={true} xs={8}>
                            <Field name={'name'} rules={[ValidationForm.REQUIRED, ValidationForm.MAX_LENGTH(30)]}>
                                <TextField required={true} label={'Character name'} variant={"outlined"} size={"small"}
                                           fullWidth={true}
                                           error={MessageForm(errors, 'name').isError()}
                                           helperText={MessageForm(errors, 'name').textError()}/>
                            </Field>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <Field name={'level'} rules={[ValidationForm.REQUIRED]} initialValue={60}>
                                <TextField type={'number'} required={true} label={'Level'} variant={"outlined"}
                                           size={"small"} fullWidth={true}
                                           error={MessageForm(errors, 'level').isError()}
                                           helperText={MessageForm(errors, 'level').textError()}/>
                            </Field>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <Field name={'combatStyle'} rules={[ValidationForm.REQUIRED]} initialValue={'AWAKENING'}>
                                <TextField id="combatStyle" label={'Combat Style'} select={true} fullWidth={true}
                                           size={"small"} variant={"outlined"}>
                                    <MenuItem value={'AWAKENING'}>Awakening</MenuItem>
                                    <MenuItem value={'SUCCESSION'}>Succession</MenuItem>
                                </TextField>
                            </Field>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <Typography variant={"subtitle2"}>Gear Score</Typography>
                            <Divider/>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <Field name={'atkPre'} rules={[ValidationForm.REQUIRED]}>
                                <TextField type={'number'} required={true} label={'PA'} variant={"outlined"}
                                           size={"small"} fullWidth={true}
                                           error={MessageForm(errors, 'atkPre').isError()}
                                           helperText={MessageForm(errors, 'atkPre').textError()}/>
                            </Field>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <Field name={'atkAwk'} rules={[ValidationForm.REQUIRED]}>
                                <TextField type={'number'} required={true} label={'PA Awakening'} variant={"outlined"}
                                           size={"small"} fullWidth={true}
                                           error={MessageForm(errors, 'atkAwk').isError()}
                                           helperText={MessageForm(errors, 'atkAwk').textError()}/>
                            </Field>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <Field name={'defense'} rules={[ValidationForm.REQUIRED]}>
                                <TextField type={'number'} required={true} label={'Defense'} variant={"outlined"}
                                           size={"small"} fullWidth={true}
                                           error={MessageForm(errors, 'defense').isError()}
                                           helperText={MessageForm(errors, 'defense').textError()}/>
                            </Field>
                        </Grid>
                    </Grid>
                </Form>
            </Box>
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
                                  <ListItemSecondaryAction>
                                      <IconButton>
                                          <Icon className={'fas fa-times'} />
                                      </IconButton>
                                  </ListItemSecondaryAction>
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
                <Grid container={true} spacing={2} justify={"flex-end"}>
                    <Grid item={true}>
                        <Button>Close</Button>
                    </Grid>
                    <Grid item={true}>
                        <Button variant={"contained"} color={"primary"}>Save</Button>
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
    errors: IMessageForm[];
    selectedClass: ECharacterClass;
}