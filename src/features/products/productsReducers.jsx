import { current } from '@reduxjs/toolkit';
export const filterProductsReducer = state => {
  let tempProducts = [...current(state.allProducts)];

  const { category, company, color, price, shipping, search } = state.filters;
  if (search) {
    tempProducts = tempProducts.filter(product =>
      product.name.startsWith(search)
    );
  }
  if (category !== 'all') {
    tempProducts = tempProducts.filter(
      product => product.category === category
    );
  }
  if (company !== 'all') {
    tempProducts = tempProducts.filter(product => product.company === company);
  }
  if (color !== 'all') {
    tempProducts = tempProducts.filter(product => {
      const colors = product.colors.filter(col => col === color);
      return colors.length > 0;
    });
  }
  if (price) {
    tempProducts = tempProducts.filter(product => product.price <= price);
  }
  if (shipping) {
    tempProducts = tempProducts.filter(product => product.freeShipping);
  }

  state.filteredProducts = tempProducts;
  state.count = tempProducts.length;
  state.numOfPages = Math.ceil(tempProducts.length / 10);
};

export const sortProductsReducer = state => {
  const { sort } = state;
  let tempProducts = [...current(state.filteredProducts)];
  function compareText(a, b) {
    return a.name.localeCompare(b.name);
  }
  if (sort === 'lowest') {
    function compareNumbers(a, b) {
      return a.price - b.price;
    }
    tempProducts = tempProducts.sort(compareNumbers);
  } else if (sort === 'highest') {
    function compareNumbers(a, b) {
      return b.price - a.price;
    }
    tempProducts = tempProducts.sort(compareNumbers);
  } else if (sort === 'a-z') {
    tempProducts = tempProducts.sort(compareText);
  } else if (sort === 'z-a') {
    tempProducts = tempProducts.sort(compareText);
    tempProducts = tempProducts.reverse();
  }

  state.filteredProducts = tempProducts;
};

export const setFilteredProductsPerPageReducer = state => {
  const { page, filteredProducts } = current(state);
  state.filteredProductsPerPage = filteredProducts.slice(
    (page - 1) * 10,
    page * 10
  );
};

export const handleChangeReducer = (state, { payload: { name, value } }) => {
  state.page = 1;
  state.filters[name] = value;
};
export const changePageReducer = (state, { payload }) => {
  state.page = payload;
};
export const updateSortReducer = (state, { payload }) => {
  state.page = 1;
  state.sort = payload;
};
export const setGridViewReducer = state => {
  state.gridView = true;
};
export const setListViewReducer = state => {
  state.gridView = false;
};
