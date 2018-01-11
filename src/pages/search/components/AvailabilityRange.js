import React, { Component } from "react";
import { connect } from "react-redux";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import { DatePicker } from "material-ui-pickers";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import { searchHotels } from "../../../store/actions";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class AvailabilityRange extends Component {
  state = {
    start: "2020-01-01",
    end: "2020-12-30"
  };

  handleStartChange = date => {
    this.setState({ start: date });
  };

  handleEndChange = date => {
    this.setState({ end: date });
  };

  handleSearchClick = event => {
    this.props.search({ start: this.state.start, end: this.state.end });
  };

  render() {
    const { start, end } = this.state;
    const classes = this.props;
    return (
      <Grid container justify="center">
        <Grid item>
          <DatePicker
            value={start}
            onChange={this.handleStartChange}
            invalidLabel="Pick a valide date"
            emptyLabel="Pick a date"
            format="DD-MM-YYYY"
          />
        </Grid>
        <Grid item>
          <DatePicker
            value={end}
            onChange={this.handleEndChange}
            invalidLabel="Pick a valide date"
            emptyLabel="Pick a date"
            format="DD-MM-YYYY"
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
        </Grid>
      </Grid>
    );
  }
}

AvailabilityRange.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  search: payload => dispatch(searchHotels(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(AvailabilityRange)
);
