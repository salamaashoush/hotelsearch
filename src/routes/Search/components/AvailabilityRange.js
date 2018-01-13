import React, { Component } from "react";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import { DatePicker } from "material-ui-pickers";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import { IconButton, InputAdornment } from "material-ui";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class AvailabilityRange extends Component {
  handleStartChange = date => {
    this.props.onChange({ start: date });
  };

  handleEndChange = date => {
    this.props.onChange({ end: date });
  };

  handleSearchClick = event => {
    this.props.history.push("/result");
    this.props.search(this.props.range);
  };
  handleClearClick = event => {
    this.props.onChange({ start: null, end: null });
  };

  render() {
    const { classes, range: { start, end } } = this.props;
    return (
      <Grid container justify="center">
        <Grid item>
          <DatePicker
            value={start}
            onChange={this.handleStartChange}
            invalidLabel="Pick a valid date"
            emptyLabel="From"
            format="DD-MM-YYYY"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton> date_range </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item>
          <DatePicker
            value={end}
            onChange={this.handleEndChange}
            invalidLabel="Pick a valid date"
            emptyLabel="To"
            format="DD-MM-YYYY"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton> date_range </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item>
          <Button
            raised
            color="primary"
            className={classes.button}
            onClick={this.handleSearchClick}
          >
            Search
          </Button>
          <Button
            disabled={!end && !start}
            color="default"
            className={classes.button}
            onClick={this.handleClearClick}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    );
  }
}

AvailabilityRange.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  range: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
export default withStyles(styles)(AvailabilityRange);
