import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import store from './store';
import Search from './pages/search';

const theme = createMuiTheme();
const App = (props) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Search />
    </MuiThemeProvider>
  </Provider>
);

export default App;