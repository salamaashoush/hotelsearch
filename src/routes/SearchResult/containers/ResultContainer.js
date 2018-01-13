import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { NavLink } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import Sort from '../components/Sort';
import Filters from '../components/Filters';
import { setSortBy, setFilters } from '../modules/actions';
import { getFilteredHotels, getPriceRange } from '../modules/selectors';

const styles = theme => ({
  container: {
    padding: 20
  },
  empty: {
    display: 'flex',
    width: '100%',
    height: '400px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

class SearchResult extends Component {
  static propTypes = {
    hotels: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    filters: PropTypes.object.isRequired,
    setFilters: PropTypes.func.isRequired,
    setSortBy: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    priceRange: PropTypes.object.isRequired
  };
  handleFiltersCahange = (filter, value) => {
    this.props.setFilters({ [filter]: value });
  };

  render() {
    const {
      hotels,
      totalNights,
      sortBy,
      filters,
      priceRange,
      setSortBy,
      classes
    } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container alignItems="center" justify="space-between">
                <Grid item xs={12} sm={4}>
                  <Filters
                    onChange={this.handleFiltersCahange}
                    filters={filters}
                    priceRange={priceRange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography type="title">
                    Total nights: {totalNights}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Sort sortBy={sortBy} onChange={setSortBy} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {hotels.length <= 0 ? (
                <Grid item xs={12} className={classes.empty}>
                  <Typography type="display1">No results</Typography>
                  <NavLink exact to="/">
                    Search again
                  </NavLink>
                </Grid>
              ) : (
                <Grid container>
                  {hotels.map(hotel => (
                    <Grid item xs={12} sm={4} key={hotel.name}>
                      <HotelCard {...hotel} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  hotels: getFilteredHotels(state),
  totalNights: state.result.totalNights,
  loading: state.result.loading,
  filters: state.result.filters,
  sortBy: state.result.sortBy,
  priceRange: getPriceRange(state)
});

const mapDispatchToProps = dispatch => ({
  setFilters: payload => dispatch(setFilters(payload)),
  setSortBy: payload => dispatch(setSortBy(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SearchResult)
);
