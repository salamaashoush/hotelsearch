import React, {Component} from "react";
import {connect} from "react-redux";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import {NavLink} from 'react-router-dom';
import HotelCard from "../components/HotelCard";
import Sort from "../components/Sort";
import {sortBy} from "../modules/actions";

const styles = theme => ({
  container: {
    padding: 20
  },
  empty: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

class SearchResult extends Component {
  static propTypes = {
    hotels: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  render() {
    const {hotels, classes} = this.props;
    return (
      <Grid container className={classes.container}>
        {hotels.length > 0 ?
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} sm={3}>

                  </Grid>
                  <Grid item xs={12} sm={3}>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography type="headline">
                      Total nights: {this.props.totalNights}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Sort sortBy={this.props.sortBy}/>
                  </Grid>
                </Grid>

              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  {hotels.map(hotel => (
                    <Grid item xs={12} sm={4} key={hotel.name}>
                      <HotelCard hotel={hotel}/>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          : <Grid item xs={12} className={classes.empty}>
            <Typography type="display1">
              No results
            </Typography>
            <NavLink exact to="/">
              Search again
            </NavLink>
          </Grid>
        }
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  hotels: state.result.availableHotels,
  totalNights: state.result.totalNights,
  loading: state.result.loading
});

const mapDispatchToProps = dispatch => ({
  sortBy: payload => dispatch(sortBy(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SearchResult)
);
