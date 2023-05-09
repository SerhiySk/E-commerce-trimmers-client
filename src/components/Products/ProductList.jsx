import React, { useEffect } from 'react';
import GridView from './GridView';
import ListView from './ListView';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';

const ProductList = () => {
  const {
    filteredProductsPerPage: products,
    gridView,
    isProductsLoading,
  } = useSelector(store => store.products);

  if (isProductsLoading) return <Loading />;
  if (products.length < 1) return <h5>No product matching filters...</h5>;
  if (!gridView) return <ListView products={products} />;

  return <GridView products={products} />;
};

export default ProductList;
