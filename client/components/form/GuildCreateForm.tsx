import * as React from "react";
import {
    Container,
    Dialog,
    Divider,
    Icon,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText
} from "@material-ui/core";
import {useTranslation} from "react-i18next";

export interface GuildCreateFormRef {
    open: () => void;
}

const GuildCreateForm = React.forwardRef<GuildCreateFormRef, IProps>((props, ref) => {
    const [visible, setVisible] = React.useState<boolean>(false);
    const {t} = useTranslation();
    React.useImperativeHandle(ref, () => ({open: onOpen}));

    function onOpen(): void {
        setVisible(true);
    }

    function onClose(): void {
        setVisible(false);
    }

    return <Dialog open={visible} fullScreen={true}>
        <Container maxWidth={"md"}>
            <ListItem>
                <ListItemText primaryTypographyProps={{variant: "h6"}} primary={t('title.guild_form')}
                              secondary={t('description.guild_form')}/>
                <ListItemSecondaryAction>
                    <IconButton onClick={onClose}>
                        <Icon className={'mdi mdi-close'}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </Container>
    </Dialog>
});

interface IProps {
}

export default GuildCreateForm;