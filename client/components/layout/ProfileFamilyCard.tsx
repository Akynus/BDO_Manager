import * as React from "react";
import {
    Avatar,
    Card,
    Icon,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    avatarColor: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
    }
}));
//</editor-folder>

export default function ProfileFamilyCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();

    return <Card elevation={10}>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.avatarColor}>
                    <Icon className={'mdi mdi-account-group'} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={'Akynus'} secondary={'Nome da Familia'}/>
            <ListItemSecondaryAction>
                <IconButton>
                    <Icon className={'mdi mdi-pencil'} />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </Card>
}

interface IProps {
}