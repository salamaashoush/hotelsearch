import React from "react";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

import { RectShape } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";

const PlaceHolder = props => (
  <Grid container className="show-loading-animation" justify="center">
    <Grid item xs={12} sm={12}>
      <RectShape color="lightgray" style={{ width: "100%", height: "50px" }} />
    </Grid>
    <Grid item xs={12} sm={4}>
      <Typography type="title">
        Premature optimization is the root of all evil!
      </Typography>
    </Grid>
  </Grid>
);

export default PlaceHolder;
