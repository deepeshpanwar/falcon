import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import { wrap } from "./wrapper";


const BaseExpansionPanelActions = ({
    classes,
    onRemoveButtonClick,
    onUpdateButtonClick,
    removeButtonTooltipTitle,
    updateButtonTooltipTitle,
}) => (
    <ListItem className={classes.actionButtonsWrapper}>

        {onUpdateButtonClick &&
        <Tooltip disableFocusListener title={updateButtonTooltipTitle}>
            <IconButton aria-label="update" onClick={onUpdateButtonClick}>
                <EditIcon />
            </IconButton>
        </Tooltip>
        }

        {onRemoveButtonClick &&
        <Tooltip disableFocusListener title={removeButtonTooltipTitle}>
            <IconButton aria-label="remove" onClick={onRemoveButtonClick}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
        }

    </ListItem>
);

export const ExpansionPanelActions = wrap(BaseExpansionPanelActions);