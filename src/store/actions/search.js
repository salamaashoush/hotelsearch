import axios from "axios";
import moment from "moment";
import * as actionTypes from "../actionTypes";

export const setHotels = payload => ({
  type: actionTypes.SET_HOTELS,
  payload
});

export const setAvailableHotels = payload => ({
  type: actionTypes.SET_AVAILABLE_HOTELS,
  payload
});

export const getHotelData = payload => {
  return dispatch => {
    axios.get("https://api.myjson.com/bins/tl0bp").then(({ data }) => {
      console.log(data);
      dispatch(setHotels(data.hotels));
    });
  };
};

export const searchHotels = payload => {
  return (dispatch, getState) => {
    const { hotels } = getState().search;
    const { start, end } = payload;
    console.log(payload);
    const availableHotels = hotels.filter(hotel => {
      return hotel.availability.some(date => {
        console.log(date);
        return (
          moment(date.from, "DD-MM-YYYY").isBetween(start, end) &&
          moment(date.to,"DD-MM-YYYY").isBetween(start, end)
        );
      });
    });
    dispatch(setAvailableHotels(availableHotels));
  };
};
