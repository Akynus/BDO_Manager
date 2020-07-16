import * as React from "react";
import {
    AppBar,
    Card,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    Hidden,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Switch,
    Tab,
    Typography,
    WithStyles
} from "@material-ui/core";
import style from "./style";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import {withTracker} from "meteor/react-meteor-data";
import {SessionKeys} from "/client/resources/GlobalVars";
import IComponent from "/imports/interfaces/IComponent";
import {ColorChangeHandler, SwatchesPicker} from 'react-color';
import clsx from "clsx";

interface ITabItem {
    icon: string;
    label: string;
    key: string;
}

class Body extends React.Component<IProps, IState> {
    private readonly tabsItems: ITabItem[];

    constructor(props: IProps) {
        super(props);

        this.changeTab = this.changeTab.bind(this);
        this.isSelected = this.isSelected.bind(this);
        this.handlePaletteDialogPrimary = this.handlePaletteDialogPrimary.bind(this);
        this.handlePaletteDialogSecondary = this.handlePaletteDialogSecondary.bind(this);
        this.testChange = this.testChange.bind(this);
        this.tabs = this.tabs.bind(this);

        this.tabsItems = [
            {key: "1", icon: 'fas fa-palette', label: 'item.theming'},
            {key: "2", icon: 'fas fa-bell', label: 'item.notification'}
        ]

        this.state = {
            tab: "1",
            primaryPalette: false,
            secondaryPalette: false
        }
    }

    private tabs(orientation: 'horizontal' | 'vertical'): React.ReactElement {
        const {classes, t} = this.props;
        return <TabList className={clsx({[classes.tabs]: orientation == "vertical"})} onChange={this.changeTab}
                        orientation={orientation} variant="scrollable">
            {this.tabsItems.map(value => {
                return <Tab value={value.key}
                            label={<ListItem dense={true}>
                                <ListItemIcon className={classes.iconTab}>
                                    <Icon className={value.icon}/>
                                </ListItemIcon>
                                <ListItemText primary={t(value.label)}/>
                            </ListItem>}/>
            })}
        </TabList>
    }

    private onChangeColor(key: SessionKeys.PRIMARY_COLOR | SessionKeys.SECONDARY_COLOR): ColorChangeHandler {
        return (color) => {
            this.handlePaletteDialogPrimary(false);
            this.handlePaletteDialogSecondary(false);
            Session.set(key, color.hex);
        }

    }

    private isSelected(id: string): boolean {
        const {tab} = this.state;
        return id === tab;
    }

    private changeTab(event: React.ChangeEvent<{}>, tab: string): void {
        this.setState({tab: tab});
    }

    private handlePaletteDialogPrimary(show: boolean): void {
        this.setState({primaryPalette: show});
    }

    private handlePaletteDialogSecondary(show: boolean): void {
        this.setState({secondaryPalette: show});
    }

    private testChange(): void {
        const {darkMode} = this.props;
        const value = (darkMode == "dark") ? 'light' : 'dark';
        Session.set(SessionKeys.THEME_STYLE, value);
    }

    private contentPrimaryPaletteColor(): React.ReactNode {
        const {classes, t} = this.props;
        const {primaryPalette} = this.state;

        return <Dialog open={primaryPalette} onClose={this.handlePaletteDialogPrimary.bind(this, false)}>
            <DialogTitle>{t('field.primaryColor')}</DialogTitle>
            <DialogContent dividers={true} className={classes.dialogContentColorPalette}>
                <SwatchesPicker onChange={this.onChangeColor(SessionKeys.PRIMARY_COLOR)}
                                className={classes.colorPalette}/>
            </DialogContent>
        </Dialog>;
    }

    private contentSecondaryPaletteColor(): React.ReactNode {
        const {classes, t} = this.props;
        const {secondaryPalette} = this.state;

        return <Dialog open={secondaryPalette} onClose={this.handlePaletteDialogSecondary.bind(this, false)}>
            <DialogTitle>{t('field.secondaryColor')}</DialogTitle>
            <DialogContent dividers={true} className={classes.dialogContentColorPalette}>
                <SwatchesPicker onChange={this.onChangeColor(SessionKeys.SECONDARY_COLOR)}
                                className={classes.colorPalette}/>
            </DialogContent>
        </Dialog>;
    }

    private contentFormOne(): React.ReactElement {
        const {t, darkMode} = this.props;
        return <Grid container={true} spacing={3}>
            <Grid item={true} xs={12}>
                <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                    {t('title.accessibility')}
                </Typography>
                <Divider/>
                <List>
                    <ListItem button={true} onClick={this.testChange}>
                        <ListItemIcon>
                            <Icon className={'fas fa-moon'}/>
                        </ListItemIcon>
                        <ListItemText primary={t('field.darkMode')} secondary={t('description.darkModeVisibility')}/>
                        <ListItemSecondaryAction>
                            <Switch color={"secondary"} onChange={this.testChange} checked={darkMode == "dark"}/>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Grid>
            <Grid item={true} xs={12}>
                <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                    {t('title.colorLayout')}
                </Typography>
                <Divider/>
                <List>
                    <ListItem button={true} onClick={this.handlePaletteDialogPrimary.bind(this, true)}>
                        <ListItemIcon>
                            <Icon className={'fas fa-tint'}/>
                        </ListItemIcon>
                        <ListItemText primary={t('field.primaryColor')}/>
                        <ListItemSecondaryAction>
                            <IconButton onClick={this.handlePaletteDialogPrimary.bind(this, true)}>
                                <Icon color={"primary"} className={'fas fa-circle'}/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem button={true} onClick={this.handlePaletteDialogSecondary.bind(this, true)}>
                        <ListItemIcon>
                            <Icon className={'fas fa-tint'}/>
                        </ListItemIcon>
                        <ListItemText primary={t('field.secondaryColor')}/>
                        <ListItemSecondaryAction>
                            <IconButton onClick={this.handlePaletteDialogSecondary.bind(this, true)}>
                                <Icon color={"secondary"} className={'fas fa-circle'}/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Grid>
            {this.contentPrimaryPaletteColor()}
            {this.contentSecondaryPaletteColor()}
        </Grid>
    }

    private contentFormTwo(): React.ReactElement {
        return <div>TWO</div>
    }

    render() {
        const {classes} = this.props;
        const {tab} = this.state;

        return <Container maxWidth="lg" className={classes.root}>
            <Card elevation={10} className={classes.content}>
                <TabContext value={tab}>
                    <Hidden only={['md', 'lg', "xl"]}>
                        <AppBar position="static" variant={"outlined"}>
                            {this.tabs("horizontal")}
                        </AppBar>
                    </Hidden>
                    <Hidden only={['sm', 'xs']}>
                        {this.tabs("vertical")}
                    </Hidden>
                    <TabPanel className={classes.form} value="1">{this.contentFormOne()}</TabPanel>
                    <TabPanel className={classes.form} value="2">{this.contentFormTwo()}</TabPanel>
                </TabContext>
            </Card>
        </Container>;
    }
}

interface IProps extends IComponent, WithStyles<keyof ReturnType<typeof style>> {
    darkMode: 'light' | 'dark'
}

interface IState {
    tab: string;
    primaryPalette: boolean;
    secondaryPalette: boolean;
}

export default withTracker(() => {
    return {
        darkMode: Session.get(SessionKeys.THEME_STYLE)
    }
})(Body);