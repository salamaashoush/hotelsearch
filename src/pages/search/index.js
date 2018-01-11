import React, { Component } from "react";
import { connect } from "react-redux";
import withStyles from "material-ui/styles/withStyles";
import { getHotelData } from "../../store/actions";
import PropTypes from 'prop-types';

const styles = theme => ({});
class Search extends Component {
  static propTypes = {
    hotels: PropTypes.array.isRequired,
    getData: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { hotels } = this.props;
    return (
      <ul>{hotels.map(hotel => <li key={hotel.name}>{hotel.name}</li>)}</ul>
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
