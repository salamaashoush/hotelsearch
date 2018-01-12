import { injectReducer } from '../../store/makeRootReducer';

const searchRoute = store => {
  const getComponent = () => {
    return import(/* webpackChunkName: "SearchContainer" */ './containers/SearchContainer');
  };

  const getReducer = () => {
    return import(/* webpackChunkName: "searchReducer" */ './modules/reducers');
  };

  injectReducer(store, { key: 'search', getReducer });

  return getComponent;
};

export default searchRoute;
