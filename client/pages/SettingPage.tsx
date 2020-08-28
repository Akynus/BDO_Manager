import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {
    AppBar,
    Card,
    Container,
    Fade,
    Hidden,
    Icon,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tab
} from "@material-ui/core";
import {Meteor} from "meteor/meteor";
import BreadcrumbPage from "/client/components/layout/BreadcrumbPage";
import {useTranslation} from "react-i18next";
import {TabContext, TabList, TabPanel} from "@material-ui/lab";
import clsx from "clsx";
import SettingThemingForm from "/client/components/form/SettingThemingForm";
import {useMongoFetch} from "react-meteor-hooks";
import Settings from "/imports/collections/SettingCollection";
import Setting from "/imports/models/Setting";
import EMethod from "/imports/enumerables/EMethod";
import {useSnackbar} from "notistack";
import {timingCall} from "/imports/utils/Helpers";
import AbsoluteLoading from "/client/components/layout/AbsoluteLoading";
import SettingAccountForm from "/client/components/form/SettingAccountForm";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: '100%',
        minHeight: 500,
        maxHeight: 620,
        height: '100%'
    },
    content: {
        marginTop: theme.spacing(2),
        flexGrow: 1,
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: "row",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        },
    },
    tabs: {
        width: 200,
        overflow: 'unset',
        borderRight: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.default
    },
    iconTab: {
        minWidth: "auto",
        marginRight: theme.spacing(1)
    },
    form: {
        flex: "auto",
        overflowX: 'auto'
    }
}));
//</editor-folder>

export default function SettingPage(): React.ReactElement {
    const classes = useStyles();
    const {t} = useTranslation();
    const [currentTab, setCurrentTab] = React.useState<string>('1');
    const settings: Setting[] = useMongoFetch(Settings.find());
    const {enqueueSnackbar} = useSnackbar();
    const tabs = [
        {key: "1", icon: 'mdi mdi-account-settings', label: 'item.my_account'},
        {key: "2", icon: 'mdi mdi-palette', label: 'item.theming'}
    ]

    function setting(): Setting {
        return settings[0];
    }

    function onChange(key: string, value: any): void {
        const timing = timingCall(EMethod.UPDATE_SETTING);
        Meteor.call(EMethod.UPDATE_SETTING, key, value, (error: Meteor.Error) => {
            timing();
            if (error) {
                enqueueSnackbar(t('message.error_update_setting'), {variant: "error"});
                console.error(error.reason);
            }
        });
    }

    function tabsContent(orientation: 'horizontal' | 'vertical'): React.ReactElement {
        return <TabList indicatorColor={"primary"} className={clsx({[classes.tabs]: orientation == "vertical"})}
                        onChange={(e, tab) => setCurrentTab(tab)}
                        orientation={orientation} variant="scrollable">
            {tabs.map(value => {
                return <Tab key={value.key} value={value.key} label={<ListItem dense={true}>
                    <ListItemIcon className={classes.iconTab}>
                        <Icon className={value.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={t(value.label)}/>
                </ListItem>}/>
            })}
        </TabList>
    }

    if (!setting()) return <AbsoluteLoading loading={true}/>;

    return (<Container maxWidth="lg" className={classes.root}>
        <BreadcrumbPage title={t('item.setting')}/>
        <Card elevation={10} className={classes.content}>
            <Fade timeout={500} in={Boolean(setting())}>
                <TabContext value={currentTab}>
                    <Hidden only={['md', 'lg', "xl"]}>
                        <AppBar color={"primary"} position="static" variant={"outlined"}>
                            {tabsContent("horizontal")}
                        </AppBar>
                    </Hidden>
                    <Hidden only={['sm', 'xs']}>
                        {tabsContent("vertical")}
                    </Hidden>
                    <TabPanel className={classes.form} value="1">
                        <SettingAccountForm object={setting()}/>
                    </TabPanel>
                    <TabPanel className={classes.form} value="2">
                        <SettingThemingForm object={setting()} onChange={onChange}/>
                    </TabPanel>
                </TabContext>
            </Fade>
        </Card>
    </Container>);
}