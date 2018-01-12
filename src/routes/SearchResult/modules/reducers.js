import { combineReducers } from 'redux';
import Types from './constants';
import States from './initialState';

const availableHotels = (state = States, action) => {
  switch (action.type) {
    case Types.SET_AVAILABLE_HOTELS:
      return {
        ...state,
        availableHotels: action.payload,
      };
    case Types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};


// const resultReducer = combineReducers({
//   availableHotels
// });

export default availableHotels;
