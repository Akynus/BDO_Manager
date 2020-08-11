import * as React from "react";
import Character from "/imports/models/Character";
import {Avatar, Badge, Box, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import ClassContext from "/imports/objects/ClassContext";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        overflowX: 'auto',
    },
    smallAvatar: {
        width: 23,
        height: 23,
        filter: 'contrast(100%) brightness(150%)'
    },
}));

export default function CharacterCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();

    function isSelected(obj: Character): boolean {

        if (props.selected) {
            return obj._id == props.selected._id;
        } else {
            return false;
        }

    }

    function onClick(obj: Character) {
        if (props.onSelect) props.onSelect(obj);
    }

    function buildItems() {
        return props.data.map(value => {
            const characterClass = ClassContext[value.class];
            return <ListItem key={String(value._id)} onClick={() => onClick(value)} button={true} selected={isSelected(value)}>
                <ListItemAvatar>
                    <Badge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                           badgeContent={<Avatar className={classes.smallAvatar} src={characterClass.icon}/>}>
                        <Avatar>
                            <Typography color={"textPrimary"}>{value.level}</Typography>
                        </Avatar>
                    </Badge>
                </ListItemAvatar>
                <ListItemText primary={<Box component={"span"}>
                    {value.name}
                </Box>} secondary={t(characterClass.name)}/>
            </ListItem>
        });
    }

    return (<List disablePadding={true} className={classes.root}>
        {buildItems()}
    </List>);
}

interface IProps {
    data: Character[];
    onSelect?: (object: Character) => void;
    selected?: Character;
}