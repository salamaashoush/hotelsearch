import { createSelector } from "reselect";

const getAvailableHotels = state => state.result.availableHotels;
const getFilters = state => state.result.filters;
const getSortBy = state => state.result.sortBy;
export const getFilteredHotels = createSelector(
  [getFilters, getSortBy, getAvailableHotels],
  ({ name, price }, sortBy, availableHotels) => {
    availableHotels.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) return 1;
      if (a[sortBy] < b[sortBy]) return -1;
      return 0;
    });
    if (name || price)
      return availableHotels.filter(hotel => {
        return (
          `${hotel.name} ${hotel.city}`
            .toLowerCase()
            .indexOf(name.toLowerCase()) >= 0 && hotel.price >= price
        );
      });

    return availableHotels;
  }
);

export const getPriceRange = createSelector(
  [getAvailableHotels],
  availableHotels => {
    availableHotels.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
    return availableHotels.length
      ? {
          min: availableHotels[0].price,
          max: availableHotels[availableHotels.length - 1].price
        }
      : { min: 0, max: 1 };
  }
);
