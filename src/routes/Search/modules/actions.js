import moment from 'moment';
import { httpClient } from '../../../utils';
import Api from '../../../api';
import Types from './constants';
import {
  setAvailableHotels,
  setTotalNights
} from '../../SearchResult/modules/actions';

export const requestHotels = payload => ({
  type: Types.REQUEST_HOTELS,
  payload
});

export const receiveHotels = payload => ({
  type: Types.RECEIVE_HOTELS,
  payload
});
export const setRange = payload => ({
  type: Types.SET_RANGE,
  payload
});

export const fetchHotels = payload => (dispatch, getState) => {
  const { items } = getState().search.hotels;
  if (!items.length > 0) {
    dispatch(requestHotels());
    return httpClient
      .get(Api.fetchHotels)
      .then(response => dispatch(receiveHotels(response.data.hotels)))
      .catch(error => console.error(error));
  }
};
export const searchHotels = payload => (dispatch, getState) => {
  const { items } = getState().search.hotels;
  const { start, end } = payload;
  const totalNights = moment(end).diff(start, 'days') || 1;
  const availableHotels = items
    .filter(hotel => {
      return hotel.availability.some(date => {
        return (
          moment(date.from, 'DD-MM-YYYY')
            .subtract(1, 'days')
            .isBetween(start, end) &&
          moment(date.to, 'DD-MM-YYYY')
            .add(1, 'days')
            .isBetween(start, end)
        );
      });
    })
    .map(hotel => ({ ...hotel, price: Math.round(hotel.price * totalNights) }));
  dispatch(setAvailableHotels(availableHotels));
  dispatch(setTotalNights(totalNights));
};
