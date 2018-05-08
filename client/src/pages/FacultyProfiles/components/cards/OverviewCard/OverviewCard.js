import React, { Component } from "react";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import List from "material-ui/List";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "material-ui/IconButton";
import Tooltip from "material-ui/Tooltip";
import moment from "moment/moment";

import FacultyAvatar from "../../../../../components/FacultyAvatar/FacultyAvatar";
import FACULTY_ENUMS from "../../../../../enums/faculty.enums";
import FormDisplayListItem from "../../../../../components/FormDisplayListItem";
import { getFullName } from "../../../../../utils/faculty";
import DetailCard from "../../DetailCard";

export default class OverviewCard extends Component {
    render() {
        const {faculty, classes} = this.props;

        const birthDate = moment(faculty.birthDate);
        const today = moment();
        const birthDateValue = `${birthDate.format("LL")} (${today.to(birthDate, true)})`;

        return (
            <DetailCard>
                <div className={classes.buttonArea}>
                    <div className={classes.buttonsWrapper}>
                        <Tooltip title="Update these details" placement="left">
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className={classes.bigOverview}>
                    <Grid container alignItems="center" direction="row" spacing={40}>
                        <FacultyAvatar faculty={faculty} className={classes.bigAvatar} />

                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="headline">
                                    {getFullName(faculty)}
                                </Typography>
                                <Typography variant="subheading">
                                    {FACULTY_ENUMS.EMPLOYMENT[faculty.employment]} Faculty
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                        </Grid>

                    </Grid>
                </div>
                <List disablePadding>
                    <FormDisplayListItem field="Email" value={faculty.user.email} />
                    <FormDisplayListItem field="Sex" value={FACULTY_ENUMS.SEX[faculty.sex]} />
                    <FormDisplayListItem field="Date of Birth" value={birthDateValue} />
                </List>
            </DetailCard>
        );
    }
}