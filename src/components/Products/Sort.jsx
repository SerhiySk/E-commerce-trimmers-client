import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../assets/wrappers/Sort';
import {
  setGridView,
  setListView,
  updateSort,
} from '../../features/products/productsSlice';
const Sort = () => {
  const {
    sort,
    filteredProducts: products,
    gridView,
  } = useSelector(store => store.products);
  const dispatch = useDispatch();
  const handleSortChange = e => {
    const value = e.target.value;
    dispatch(updateSort(value));
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          className={`${gridView ? 'active' : null}`}
          onClick={() => dispatch(setGridView())}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`${!gridView ? 'active' : null}`}
          onClick={() => dispatch(setListView())}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={handleSortChange}
        >
          <option value="lowest">price (lowest)</option>
          <option value="highest">price (highest)</option>
          <option value="a-z">name (a - z)</option>
          <option value="z-a">name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;
