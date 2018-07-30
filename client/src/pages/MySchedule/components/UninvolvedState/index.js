import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UninvolvedIcon from "@material-ui/icons/NoMeetingRoom";
import { termScheduleToString } from "../../../../utils/faculty_loading.util";
import { wrap } from "./wrapper";

class BaseUninvolvedState extends PureComponent {
    render() {
        const { classes, termSchedule } = this.props;
        return (
            <div className={classes.pageContainer}>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid
                            container
                            spacing={32}
                            direction="row"
                            alignItems="center"
                            wrap="nowrap"
                        >
                            <Grid item>
                                <UninvolvedIcon
                                    className={classes.icon}
                                    color="action"
                                />
                            </Grid>
                            <Grid item container direction="column" spacing={8}>
                                <Grid item>
                                    <Typography
                                        variant="headline"
                                        color="textSecondary"
                                    >
                                        You were not selected to participate in{" "}
                                        {termScheduleToString(termSchedule)}.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant="subheading"
                                        color="textSecondary"
                                    >
                                        When you are selected to participate in
                                        a term, you can place your availability
                                        and see your schedule here.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export const UninvolvedState = wrap(BaseUninvolvedState);
