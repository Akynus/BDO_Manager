import * as React from "react";
import Setting from "/imports/models/Setting";
import {
    Avatar,
    Divider,
    Grid,
    Icon,
    List,
    ListItem, ListItemAvatar,
    ListItemIcon,
    ListItemText, Menu, MenuItem,
    Typography
} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import LanguageContext from "/imports/objects/LanguageContext";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import moment from "moment-timezone";
import TimezoneList from "/imports/objects/TimezoneList";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    avatarFlag: {
        height: 25,
        width: 40,
        objectFit: 'cover'
    },
    avatarTime: {
        height: 25,
        width: 25,
        background: 'none',
        fontSize: 15
    }
}), {classNamePrefix: 'setting-general'});
//</editor-folder>


export default function SettingGeneralForm(props: IProps): React.ReactElement<IProps> {
    const {t} = useTranslation();
    const classes = useStyles();
    const [showLanguageSelect, setShowLanguageSelect] = React.useState<boolean>(false);
    const [showTimezoneSelect, setShowTimezoneSelect] = React.useState<boolean>(false);

    function onOpenLanguage(): void {
        setShowLanguageSelect(true);
    }

    function onCloseLanguage(): void {
        setShowLanguageSelect(false);
    }

    function onOpenTimezone(): void {
        setShowTimezoneSelect(true);
    }

    function onCloseTimezone(): void {
        setShowTimezoneSelect(false);
    }

    function onChange(key: string, value: any): void {
        onCloseLanguage();
        onCloseTimezone();
        props.onChange(key, value);
    }

    function menuLanguage(): React.ReactNode {
        return <Menu anchorEl={document.getElementById("language-text-value")!} keepMounted={true}
                     open={showLanguageSelect} onClose={onCloseLanguage} PaperProps={{
            style: {
                maxHeight: 300
            }
        }}>
            {Object.keys(LanguageContext).map(value => {
                return <MenuItem key={LanguageContext[value].value}
                                 onClick={() => onChange('general.language', LanguageContext[value].value)}>
                    <ListItem dense={true}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatarFlag} variant={"square"}
                                    src={LanguageContext[value].icon}/>
                        </ListItemAvatar>
                        <ListItemText primary={t(LanguageContext[value].name)}/>
                    </ListItem>
                </MenuItem>
            })}
        </Menu>
    }

    function menuTimezone(): React.ReactNode {
        return <Menu anchorEl={document.getElementById("timezone-text-value")!} keepMounted={true}
                     open={showTimezoneSelect} onClose={onCloseTimezone} PaperProps={{
            style: {
                maxHeight: 300
            }
        }}>

            {TimezoneList.sort((a, b) => {
                const timeA = moment.tz(a).format('Z');
                const timeB = moment.tz(b).format('Z');
                return timeA.localeCompare(timeB);
            }).map(value => {
                const timezone = moment.tz(value);
                return <MenuItem key={value} onClick={() => onChange('general.timezone', value)}>
                    <ListItem dense={true}>
                        <ListItemText primary={`GMT ${timezone.format('Z')}`} secondary={value}/>
                    </ListItem>
                </MenuItem>
            })}
        </Menu>
    }

    return <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} spacing={1}>
            <Typography variant="button" color={"textSecondary"} display="block" gutterBottom={true}>
                {t('title.language_and_region')}
            </Typography>
            <Divider/>
            <List>
                <ListItem button={true} onClick={onOpenLanguage}>
                    <ListItemIcon>
                        <Icon className={'mdi mdi-translate'}/>
                    </ListItemIcon>
                    <ListItemText primary={t('field.setting.language')}
                                  secondary={t('description.setting.language')}/>
                    <Typography id={'language-text-value'} variant={"subtitle2"}
                                color={"textSecondary"}>{t(LanguageContext[props.object.general.language].name)}</Typography>
                </ListItem>
                <ListItem button={true} onClick={onOpenTimezone}>
                    <ListItemIcon>
                        <Icon className={'mdi mdi-calendar-clock'}/>
                    </ListItemIcon>
                    <ListItemText primary={t('field.setting.timezone')}
                                  secondary={t('description.setting.timezone')}/>
                    <Typography variant={"subtitle2"} color={"textSecondary"}>
                        <Typography id={'timezone-text-value'} variant={"subtitle2"}
                                    color={"textSecondary"}>{`${moment.tz(props.object.general.timezone).format('Z')} ${props.object.general.timezone}`}</Typography>
                    </Typography>
                </ListItem>
            </List>
        </Grid>
        {menuLanguage()}
        {menuTimezone()}
    </Grid>
}

interface IProps {
    onChange: (key: string, value: any) => void;
    object: Setting;
}