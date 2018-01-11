import React, { Component } from "react";
import { connect } from "react-redux";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import { getHotelData } from "../../store/actions";
import HotelCard from "./components/HotelCard";
import AvailabilityRange from "./components/AvailabilityRange";

const styles = theme => ({
  container: {
    padding: 20
  }
});
class Search extends Component {
  static propTypes = {
    hotels: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { hotels, classes } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <AvailabilityRange/>
        </Grid>
        <Grid item xs={12} sm={4} />
        <Grid item xs={12} sm={8}>
          <Grid container>
            {hotels.map(hotel => (
              <Grid item xs={12} sm={6} key={hotel.name}>
                <HotelCard hotel={hotel} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  hotels: state.search.hotels
});

const mapDispatchToProps = dispatch => ({
  getData: payload => dispatch(getHotelData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Search)
);
