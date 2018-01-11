import initialState from "../initialState";
import * as actionTypes from "../actionTypes";

export default (state = initialState.search, action) => {
  switch (action.type) {
    case actionTypes.SET_HOTELS:
      return {
        ...state,
        hotels: action.payload
      };
    default:
      return state;
  }
};