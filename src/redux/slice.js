import { createSlice } from '@reduxjs/toolkit';
import { fetchDataThunk } from './operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  favoriteList: [],
  filters: {
    brand: '',
    price: '',
    mileageFrom: null,
    mileageTo: null,
  },
};
const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    filterCars: (state, { payload }) => {
      state.filters = payload;
    },
    clearFilters: state => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchDataThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
  selectors: {
    selectCars: state => state.cars,
    selectFilteredCarsBrand: state => state.filters.brand,
    selectFilteredCarsPrice: state => state.filters.price,
    selectFilteredCarsMileageFrom: state => state.filters.mileageFrom,
    selectFilteredCarsMileageTo: state => state.filters.mileageTo,
    selectFavorites: state => state.favoriteList,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.error,
  },
});
export const carsReducer = slice.reducer;
export const { filterCars, clearFilters } = slice.actions;
export const {
  selectCars,
  selectFilteredCarsBrand,
  selectFilteredCarsPrice,
  selectFilteredCarsMileageFrom,
  selectFilteredCarsMileageTo,
  selectFavorites,
  selectIsLoading,
  selectIsError,
} = slice.selectors;
