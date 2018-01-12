import React from 'react';
import Grid from 'material-ui/Grid';
import {RectShape} from 'react-placeholder/lib/placeholders';
import "react-placeholder/lib/reactPlaceholder.css";

const PlaceHolder = (props) => (
  <Grid container className="show-loading-animation">
    <Grid item xs={12} sm={4}>
      <RectShape color='lightgray' style={{width: '100%', height: '200px'}}/>
    </Grid>
    <Grid item xs={12} sm={4}>
      <RectShape color='lightgray' style={{width: '100%', height: '200px'}}/>
    </Grid>
    <Grid item xs={12} sm={4}>
      <RectShape color='lightgray' style={{width: '100%', height: '200px'}}/>
    </Grid>
    <Grid item xs={12} sm={4}>
      <RectShape color='lightgray' style={{width: '100%', height: '200px'}}/>
    </Grid>
    <Grid item xs={12} sm={4}>
      <RectShape color='lightgray' style={{width: '100%', height: '200px'}}/>
    </Grid>
    <Grid item xs={12} sm={4}>
      <RectShape color='lightgray' style={{width: '100%', height: '200px'}}/>
    </Grid>
  </Grid>
);

export default PlaceHolder;
