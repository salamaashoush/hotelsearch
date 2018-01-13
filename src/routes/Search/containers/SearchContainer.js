import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import withStyles from "material-ui/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import ReactPlaceholder from "react-placeholder";
import { fetchHotels, searchHotels, setRange } from "../modules/actions";
import AvailabilityRange from "../components/AvailabilityRange";
import PlaceHolder from "../../../shared/PlaceHolder";
const styles = theme => ({
  container: {
    width: "100vw",
    height: "100vh"
  }
});

class SearchContainer extends Component {
  static propTypes = {
    fetchHotels: PropTypes.func.isRequired,
    searchHotels: PropTypes.func.isRequired,
    setDateRange: PropTypes.func.isRequired,
    range: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.fetchHotels();
  }

  render() {
    const {
      classes,
      history,
      range,
      searchHotels,
      setDateRange,
      isFetching
    } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className={classes.container}
      >
        <ReactPlaceholder
          ready={!isFetching}
          style={{ background: "none" }}
          customPlaceholder={<PlaceHolder />}
        >
          <AvailabilityRange
            search={searchHotels}
            history={history}
            range={range}
            onChange={setDateRange}
          />
        </ReactPlaceholder>
      </Grid>
    );
  }
}

const mapSateToProps = state => ({
  range: state.search.range,
  isFetching: state.search.hotels.isFetching
});
const mapDispatchToProps = dispatch => ({
  fetchHotels: payload => dispatch(fetchHotels(payload)),
  searchHotels: payload => dispatch(searchHotels(payload)),
  setDateRange: payload => dispatch(setRange(payload))
});

export default withRouter(
  connect(mapSateToProps, mapDispatchToProps)(
    withStyles(styles)(SearchContainer)
  )
);
