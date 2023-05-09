import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllProductsThunk } from './productsThunk';
import {
  filterProductsReducer,
  setFilteredProductsPerPageReducer,
  sortProductsReducer,
  handleChangeReducer,
  changePageReducer,
  updateSortReducer,
  setGridViewReducer,
  setListViewReducer,
} from './productsReducers';

const initialFiltersState = {
  gridView: false,
  sort: 'a-z',
  filters: {
    search: '',
    category: 'all',
    company: 'all',
    color: 'all',
    price: 0,
    maxPrice: 0,
    minPrice: 0,
    shipping: false,
  },
};
const initialState = {
  isProductsLoading: true,
  allProducts: [],
  featuredProducts: [],
  filteredProducts: [],
  filteredProductsPerPage: [],
  count: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    handleChange: handleChangeReducer,
    changePage: changePageReducer,
    updateSort: updateSortReducer,
    setGridView: setGridViewReducer,
    setListView: setListViewReducer,
    filterProducts: filterProductsReducer,
    setFilteredProductsPerPage: setFilteredProductsPerPageReducer,
    sortProducts: sortProductsReducer,
    clearAllProductsState: () => initialState,
    clearFilters: state => {
      const { maxPrice, minPrice } = state.filters;
      state.page = 1;
      state.filters = {
        ...initialState.filters,
        maxPrice,
        minPrice,
        price: maxPrice,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.isProductsLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        const {
          allProducts,
          featuredProducts,
          count,
          numOfPages,
          minPrice,
          maxPrice,
        } = payload;

        return {
          ...state,
          allProducts,
          featuredProducts,
          count,
          numOfPages,
          isProductsLoading: false,
          filters: { ...state.filters, minPrice, maxPrice, price: maxPrice },
        };
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        toast.error(payload);
        state.isProductsLoading = false;
      });
  },
});
export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  getAllProductsThunk
);

export const {
  handleChange,
  changePage,
  updateSort,
  setGridView,
  setListView,
  clearFilters,
  filterProducts,
  setFilteredProductsPerPage,
  sortProducts,
  clearAllProductsState,
} = productsSlice.actions;
export default productsSlice.reducer;
