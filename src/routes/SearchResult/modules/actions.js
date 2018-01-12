import Types from './constants';

export const setAvailableHotels = payload => ({
  type: Types.SET_AVAILABLE_HOTELS,
  payload
});

const setLoading = payload => ({
  type: Types.SET_LOADING,
  payload
});

export const sortBy = payload => (dispatch, getState) => {
  dispatch(setLoading(true));
  const {availableHotels} = getState().result;
  availableHotels.sort((a, b) => {
    if (a[payload] > b[payload]) return 1;
    if (a[payload] < b[payload]) return -1;
    return 0;
  });
  dispatch(setAvailableHotels(availableHotels));
  dispatch(setLoading(false));
};

export const filterBy = payload => (dispatch, getState) => {
  dispatch(setLoading(true));
  const {availableHotels} = getState().result;
  availableHotels.filter((hotel) => {

  });
  dispatch(setAvailableHotels(availableHotels));
  dispatch(setLoading(false));
};
