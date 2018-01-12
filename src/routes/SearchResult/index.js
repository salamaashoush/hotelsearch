import { injectReducer } from '../../store/makeRootReducer';

const resultRoute = store => {
  const getComponent = () => {
    return import(/* webpackChunkName: "ResultContainer" */ './containers/ResultContainer');
  };

  const getReducer = () => {
    return import(/* webpackChunkName: "resultReducer" */ './modules/reducers');
  };

  injectReducer(store, { key: 'result', getReducer });

  return getComponent;
};

export default resultRoute;
