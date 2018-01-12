import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from '../store';
import createRoutes from './createRoutes'

const store = configureStore();
const history = createHistory();

const App = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {createRoutes(store)}
    </ConnectedRouter>
  </Provider>
);

export default App;
