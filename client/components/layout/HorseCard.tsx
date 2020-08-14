import * as React from "react";
import {Avatar, Badge, Box, Icon, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import HorseContext from "/imports/objects/HorseContext";
import {useTranslation} from "react-i18next";
import {Mongo} from "meteor/mongo";
import Horse from "/imports/models/Horse";
import {blue, pink} from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        overflowX: 'auto',
    },
    smallAvatar: {},
    femaleIcon: {
        color: pink.A400
    },
    maleIcon: {
        color: blue.A400
    }
}));

export default function HorseCard(props: IProps<Horse>): React.ReactElement<IProps<Horse>> {
    const classes = useStyles();
    const {t} = useTranslation();

    function isSelected(obj: Horse): boolean {
        return obj._id == props.selected;
    }

    function onClick(obj: Horse): void {
        if (props.onSelect) props.onSelect(obj._id);
    }

    function iconGender(gender: "male" | "female"): React.ReactNode {
        switch (gender) {
            case "male": {
                return <Icon className={clsx(['fas fa-mars', classes.maleIcon])}/>
            }
            case "female": {
                return <Icon className={clsx(['fas fa-venus', classes.femaleIcon])}/>
            }
        }
    }

    function buildItems() {
        return props.data.map(value => {
            const horse = HorseContext[value.type];
            return <ListItem key={String(value._id)} onClick={() => onClick(value)} button={true}
                             selected={isSelected(value)}>
                <ListItemAvatar>
                    <Badge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                           badgeContent={iconGender(value.gender)}>
                        <Avatar>
                            <Typography color={"textPrimary"}>{value.level}</Typography>
                        </Avatar>
                    </Badge>
                </ListItemAvatar>
                <ListItemText primary={<Box component={"span"}>
                    {value.name}
                </Box>} secondary={t(horse.name)}/>
            </ListItem>
        });
    }

    return (<List disablePadding={true} className={classes.root}>
        {buildItems()}
    </List>);
}

interface IProps<T> {
    data: T[];
    onSelect?: (id: Mongo.ObjectID) => void;
    selected?: Mongo.ObjectID;
}