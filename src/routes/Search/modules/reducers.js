import { combineReducers } from 'redux';
import Types from './constants';
import States from './initialState';

const hotels = (state = States.hotels, action) => {
  switch (action.type) {
    case Types.REQUEST_HOTELS:
      return {
        ...state,
        isFetching: true,
      };
    case Types.RECEIVE_HOTELS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      };
    default:
      return state;
  }
};


const searchReducer = combineReducers({
  hotels
});

export default searchReducer;
