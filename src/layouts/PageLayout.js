import React from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

const theme = createMuiTheme();
const PageLayout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
