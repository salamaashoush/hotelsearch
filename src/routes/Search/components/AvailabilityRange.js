import React, {Component} from "react";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import {DatePicker} from "material-ui-pickers";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import {IconButton, InputAdornment} from 'material-ui';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class AvailabilityRange extends Component {
  state = {
    start: null,
    end: null
  };

  handleStartChange = date => {
    this.setState({start: date});
  };

  handleEndChange = date => {
    this.setState({end: date});
  };

  handleSearchClick = event => {
    this.props.history.push('/result')
    this.props.search({start: this.state.start, end: this.state.end});
  };
  handleClearClick = event => {
    this.setState({start: null, end: null});
  };

  render() {
    const {start, end} = this.state;
    const {classes} = this.props;
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
              ),
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
              ),
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
            disabled={!this.state.end && !this.state.start}
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
};
export default withStyles(styles)(AvailabilityRange);

