import Types from './constants';
import States from './initialState';

const availableHotels = (state = States, action) => {
  switch (action.type) {
    case Types.SET_AVAILABLE_HOTELS:
      return {
        ...state,
        availableHotels: action.payload
      };
    case Types.SET_TOTAL_NIGHTS:
      return {
        ...state,
        totalNights: action.payload
      };
    case Types.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case Types.SET_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    case Types.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };
    default:
      return state;
  }
};

// const resultReducer = combineReducers({
//   availableHotels
// });

export default availableHotels;
