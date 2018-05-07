import React, { Component } from "react";
import Typography from "material-ui/Typography";
import Search from "@material-ui/icons/Search";

class EmptySearchResultsState extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.blankState}>
                <div className={classes.messageWrapper}>

                    <Search className={`${classes.messageColor} ${classes.icon}`} />
                    <Typography variant="headline" className={classes.messageColor}>
                        No Results Found
                    </Typography>
                    <Typography variant="subheading" className={classes.messageColor}>
                        Your search <b>{this.props.searchKeyword}</b> did not match any documents.
                    </Typography>

                </div>
            </div>
        );
    }
}

export default EmptySearchResultsState;
