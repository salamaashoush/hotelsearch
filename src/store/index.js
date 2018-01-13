import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import makeRootReducer from "./makeRootReducer";

const history = createHistory();
const router = routerMiddleware(history);
const middleware = [router, thunk];
const composeEnhancers =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const configureStore = initialState => {
  const store = createStore(makeRootReducer(), initialState, enhancer);

  store.asyncReducers = {};

  return store;
};

export default configureStore;
