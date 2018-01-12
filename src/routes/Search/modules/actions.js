import moment from "moment";
import { push } from 'react-router-redux';
import {httpClient} from "../../../utils";
import Api from '../../../api';
import Types from './constants';
import {setAvailableHotels} from "../../SearchResult/modules/actions";


export const requestHotels = payload => ({
  type: Types.REQUEST_HOTELS,
  payload
});

export const receiveHotels = payload => ({
  type: Types.RECEIVE_HOTELS,
  payload
});

export const fetchHotels = payload => dispatch => {
  dispatch(requestHotels());

  return httpClient
    .get(Api.fetchHotels)
    .then(response => dispatch(receiveHotels(response.data.hotels)))
    .catch(error => console.error(error));
};
export const searchHotels = payload => (dispatch, getState) => {
  const {items} = getState().search.hotels;
  const {start, end} = payload;
  const availableHotels = items.filter(hotel => {
    return hotel.availability.some(date => {
      return (
        moment(date.from, "DD-MM-YYYY").isBetween(start, end) &&
        moment(date.to, "DD-MM-YYYY").isBetween(start, end)
      );
    });
  });
  dispatch(setAvailableHotels(availableHotels));
};
