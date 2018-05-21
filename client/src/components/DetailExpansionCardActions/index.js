import { withStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import DetailExpansionCardActions from "./DetailExpansionCardActions";
import styles from "./styles";


export default compose(
    withStyles(styles),
)(DetailExpansionCardActions);