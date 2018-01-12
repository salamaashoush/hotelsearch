import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import CoreLayout from '../layouts/PageLayout';
import searchRoute from '../routes/Search';
import resultRoute from '../routes/SearchResult';

const createRoutes = store => {
  const Search = asyncComponent(searchRoute(store));
  const Result = asyncComponent(resultRoute(store));

  return (
    <CoreLayout>
      <Switch>
        <Route exact path="/" render={() => <Search />} />
        <Route path="/result" render={() => <Result />} />
      </Switch>
    </CoreLayout>
  );
};

export default createRoutes;
