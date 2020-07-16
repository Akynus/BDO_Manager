import * as React from "react";
import {
    AppBar,
    Card,
    Container,
    Divider,
    Hidden, Icon,
    List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText,
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
        this.testChange = this.testChange.bind(this);
        this.tabs = this.tabs.bind(this);

        this.tabsItems = [
            {key: "1", icon: 'fas fa-palette', label: 'item.theming'}
        ]

        this.state = {
            tab: "1"
        }
    }

    private tabs(orientation: 'horizontal' | 'vertical'): React.ReactElement {
        const {classes, t} = this.props;
        return <TabList className={clsx({[classes.tabs]: orientation == "vertical"})} onChange={this.changeTab} orientation={orientation} variant="scrollable">
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

    private isSelected(id: string): boolean {
        const {tab} = this.state;
        return id === tab;
    }

    private changeTab(event: React.ChangeEvent<{}>, tab: string): void {
        this.setState({tab: tab});
    }

    private testChange(): void {
        const {darkMode} = this.props;
        const value = (darkMode == "dark") ? 'light' : 'dark';
        Session.set(SessionKeys.THEME_STYLE, value);
    }

    private contentFormOne(): React.ReactElement {
        const {t, darkMode} = this.props;
        return <div>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.accessibility')}
            </Typography>
            <Divider/>
            <List>
                <ListItem button={true} onClick={this.testChange}>
                    <ListItemIcon>
                        <Icon className={'fas fa-moon'}/>
                    </ListItemIcon>
                    <ListItemText primary={t('field.darkMode')}/>
                    <ListItemSecondaryAction>
                        <Switch color={"secondary"} onChange={this.testChange} checked={darkMode == "dark"}/>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
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
}

export default withTracker(() => {
    return {
        darkMode: Session.get(SessionKeys.THEME_STYLE)
    }
})(Body);