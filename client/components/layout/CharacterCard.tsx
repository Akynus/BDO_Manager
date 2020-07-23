import * as React from "react";
import Character from "/imports/models/Character";
import {Avatar, Badge, Box, Chip, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CharacterClass from "/imports/objects/CharacterClass";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {},
    smallAvatar: {
        width: 23,
        height: 23,
        filter: 'contrast(100%) brightness(150%)'
    },
}));

export default function CharacterCard(props: IProps): React.ReactElement<IProps> {
    const classes = useStyles();
    const {t} = useTranslation();

    function buildItems() {
        return props.data.map(value => {
            const characterClass = CharacterClass[value.class];
            return <ListItem button={true}>
                <ListItemAvatar>
                    <Badge overlap="circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                           badgeContent={<Avatar className={classes.smallAvatar} src={characterClass.icon}/>}>
                        <Avatar>
                            <Typography color={"textPrimary"}>{value.level}</Typography>
                        </Avatar>
                    </Badge>
                </ListItemAvatar>
                <ListItemText primary={<Box component={"span"}>
                    {value.name} <Chip size={"small"} color={"primary"} label={'Principal'}/>
                </Box>} secondary={t(characterClass.name)}/>
            </ListItem>
        });
    }

    return (<List disablePadding={true}>
        {buildItems()}
    </List>);
}

interface IProps {
    data: Character[];
    onSelect?: (object: Character) => void;
}