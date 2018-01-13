import React from "react";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import Button from "material-ui/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  container: {
    display: "flex"
  }
});

const Sort = ({ classes, onChange, sortBy }) => (
  <div className={classes.container}>
    <Button
      color={sortBy === "name" ? "primary" : "default"}
      className={classes.button}
      onClick={e => onChange("name")}
    >
      Sort By Name
    </Button>
    <Button
      color={sortBy === "price" ? "primary" : "default"}
      className={classes.button}
      onClick={e => onChange("price")}
    >
      Sort By Price
    </Button>
  </div>
);

Sort.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired
};

export default withStyles(styles)(Sort);
