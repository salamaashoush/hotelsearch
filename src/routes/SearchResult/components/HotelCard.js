import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import red from "material-ui/colors/red";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 194
  },
  avatar: {
    backgroundColor: red[500]
  },
  flexGrow: {
    flex: "1 1 auto"
  },
  currency: {
    fontSize: 10
  }
});

class HotelCard extends React.Component {
  render() {
    const { classes, name, price, city } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {name[0]}
            </Avatar>
          }
          title={<span data-test="name">{name}</span>}
          subheader={<span data-test="city">{city}</span>}
        />
        <CardContent>
          <Typography
            component="p"
            type="display1"
            align="left"
            data-test="price"
          >
            {price} <span className={classes.currency}>AED</span>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

HotelCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default withStyles(styles)(HotelCard);
