import React from 'react';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

const Filters = ({
  classes,
  filters: { name, price },
  priceRange: { min, max },
  onChange
}) => (
  <Grid container>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        id="name"
        label="Filter by name"
        name="name"
        className={classes.textField}
        value={name}
        onChange={({ target: { value } }) => onChange('name', value)}
        margin="normal"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <p>Price starts from : {price}</p>
      <Slider
        name="price"
        min={min}
        max={max}
        defaultValue={1}
        value={price}
        onChange={value => onChange('price', value)}
      />
    </Grid>
  </Grid>
);

Filters.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  priceRange: PropTypes.object.isRequired
};

export default withStyles(styles)(Filters);
