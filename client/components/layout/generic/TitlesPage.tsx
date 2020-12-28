import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Avatar, Divider, Icon, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: "block",
        marginBottom: theme.spacing(2)
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    icon: {
        color: theme.palette.getContrastText(theme.palette.primary.main)
    }
}), {classNamePrefix: 'titles-page'});

export default function TitlesPage(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();

    return <div className={classes.root}>
        <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <Icon className={clsx([classes.icon, props.icon])}/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Typography color={"textPrimary"} variant={"h4"}>{props.title}</Typography>}/>
        </ListItem>
        <Divider/>
    </div>
}

interface IProps {
    title: string;
    icon: string;
}