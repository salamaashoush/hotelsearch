import React, {Component} from "react";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import Button from "material-ui/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

class Sort extends Component {
  handleSortByPriceClick = event => {
    this.props.sortBy('price');
  };
  handleSortByNameClick = event => {
    this.props.sortBy('name');
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <Button
          color="primary"
          className={classes.button}
          onClick={this.handleSortByNameClick}
        >
          Sort By Name
        </Button>
        <Button
          color="primary"
          className={classes.button}
          onClick={this.handleSortByPriceClick}
        >
          Sort By Price
        </Button>
      </div>
    );
  }
}

Sort.propTypes = {
  classes: PropTypes.object.isRequired,
  sortBy: PropTypes.func.isRequired,
};


export default withStyles(styles)(Sort)

