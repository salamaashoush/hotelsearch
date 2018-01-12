import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import {fetchHotels, searchHotels} from "../modules/actions";
import AvailabilityRange from "../components/AvailabilityRange";


const styles = theme => ({
  container: {
    width: '100vw',
    height: '100vh',
  }
});

class SearchContainer extends Component {
  static propTypes = {
    fetchHotels: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchHotels();
  }

  render() {
    const {classes} = this.props;
    return (
      <Grid container alignItems='center' justify='center' direction='column' className={classes.container}>
        <AvailabilityRange search={this.props.searchHotels} history={this.props.history}/>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchHotels: payload => dispatch(fetchHotels(payload)),
  searchHotels: payload => dispatch(searchHotels(payload))
});

export default withRouter(
  connect(null, mapDispatchToProps)(
    withStyles(styles)(SearchContainer)
  )
);
