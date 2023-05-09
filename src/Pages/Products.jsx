import { PageHero, PageBtnContainer } from '../components';
import { Filters, Sort, ProductList } from '../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterProducts,
  sortProducts,
  setFilteredProductsPerPage,
} from '../features/products/productsSlice';
import { useEffect } from 'react';
import Wrapper from '../assets/wrappers/ProductsPage';
import { changePage } from '../features/products/productsSlice';

const Products = () => {
  const {
    allProducts,
    filteredProducts,
    page,
    numOfPages,
    sort,
    filters: { search, category, company, color, price, shipping },
  } = useSelector(store => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterProducts());
  }, [allProducts, search, category, company, color, price, shipping]);
  useEffect(() => {
    dispatch(setFilteredProductsPerPage());
  }, [filteredProducts, page]);
  useEffect(() => {
    dispatch(sortProducts());
  }, [sort]);
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
        <PageBtnContainer
          page={page}
          numOfPages={numOfPages}
          changePage={changePage}
        />
      </Wrapper>
    </main>
  );
};
export default Products;
