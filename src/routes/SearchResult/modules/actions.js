import Types from "./constants";

export const setAvailableHotels = payload => ({
  type: Types.SET_AVAILABLE_HOTELS,
  payload
});

export const setTotalNights = payload => ({
  type: Types.SET_TOTAL_NIGHTS,
  payload
});

export const setLoading = payload => ({
  type: Types.SET_LOADING,
  payload
});

export const setFilters = payload => ({
  type: Types.SET_FILTERS,
  payload
});

export const setSortBy = payload => ({
  type: Types.SET_SORT_BY,
  payload
});
