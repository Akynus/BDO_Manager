import * as React from "react";
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Icon} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

//<editor-folder defaultstate="collapsed" desc="Styles">
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginTop: theme.spacing(2)
    },
}), {classNamePrefix: 'filter-accordion'});
//</editor-folder>

const FilterAccordion: React.FunctionComponent<IProps> = function (props) {
    const classes = useStyles();
    const {t} = useTranslation();
    const [opened, setOpened] = React.useState<boolean>(false);

    function onToggle(): void {
        setOpened(!opened);
    }

    function onClick(event: React.MouseEvent<any>): void {
        event.stopPropagation();
    }

    return <div className={classes.root}>
        <Accordion elevation={2}>
            <AccordionSummary onClick={onToggle} expandIcon={<Icon className={'mdi mdi-chevron-down'}/>}>
                <Button onClick={onClick} color={"secondary"} variant={"contained"}>{t('action.insert')}</Button>
            </AccordionSummary>
            <AccordionDetails>{props.children}</AccordionDetails>
            <AccordionActions>
                <Button>{t('action.clear')}</Button>
                <Button color={"primary"}>
                    {t('action.search')}
                </Button>
            </AccordionActions>
        </Accordion>
    </div>
}

interface IProps {
}

export default FilterAccordion;