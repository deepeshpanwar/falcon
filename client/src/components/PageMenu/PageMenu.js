import React, { Component } from "react";
import Menu, { MenuItem } from "material-ui/Menu";

import { MODULE_PAGES } from "../../pages/pages";

export default class PageMenu extends Component {
    switchToPage = page => {
        this.props.history.push(page.route);
        this.props.onClose();
    };

    //TODO: Add user permissions
    menuItems = MODULE_PAGES.map(page =>
        <MenuItem onClick={() => this.switchToPage(page)} key={page.identifier}>{page.name}</MenuItem>,
    );

    render() {
        const {open, onClose, anchorEl} = this.props;

        return (
            <Menu open={open} onClose={onClose} anchorEl={anchorEl}>
                {this.menuItems}
            </Menu>
        );
    }
}