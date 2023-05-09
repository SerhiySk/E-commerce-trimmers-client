import React, { useEffect } from 'react';
import Wrapper from '../../assets/wrappers/Filters';
import { getUniqueValues, formatPrice } from '../../utils/helpers';
import { FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearFilters,
  handleChange,
} from '../../features/products/productsSlice';
import SearchForm from './SearchForm';
const Filters = () => {
  const { allProducts: products, filters } = useSelector(
    store => store.products
  );
  const dispatch = useDispatch();

  const categories = getUniqueValues(products, 'category');
  const companies = getUniqueValues(products, 'company');
  const colors = getUniqueValues(products, 'colors');
  const { category, company, color, price, maxPrice, minPrice, shipping } =
    filters;
  const handleUpdateFilters = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    dispatch(handleChange({ name, value }));
  };
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={e => e.preventDefault()}>
          <SearchForm />
          <div className="form-control">
            <h4>category</h4>
            {categories.map((cat, index) => (
              <button
                type="button"
                onClick={handleUpdateFilters}
                name="category"
                value={cat}
                key={index}
                className={
                  cat.toLowerCase() === category
                    ? 'category active'
                    : 'category'
                }
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="form-control">
            <h4>company</h4>
            <select
              id="company"
              name="company"
              className="company"
              onChange={handleUpdateFilters}
              value={company}
            >
              {companies.map((company, index) => (
                <option key={index}>{company}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <h4>colors</h4>
            <div className="colors">
              {colors.map((col, index) => {
                if (col === 'all')
                  return (
                    <button
                      type="button"
                      value={col}
                      name="color"
                      key={index}
                      className={col === color ? 'active all-btn' : 'all-btn'}
                      onClick={handleUpdateFilters}
                    >
                      {col}
                    </button>
                  );
                return (
                  <button
                    type="button"
                    value={col}
                    name="color"
                    key={index}
                    style={{
                      backgroundColor: col,
                    }}
                    className={col === color ? 'active color-btn' : 'color-btn'}
                    onClick={handleUpdateFilters}
                  >
                    {col === color && FaCheck()}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h4>price</h4>
            <p className="price">{formatPrice(price)}</p>

            <div className="range-slider">
              <input
                type="range"
                className="max-price"
                value={price}
                name="price"
                min={minPrice}
                max={maxPrice}
                onChange={handleUpdateFilters}
              />
            </div>
          </div>
          <div className="form-control">
            <div className="shipping">
              <span>free shipping</span>
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                checked={shipping}
                onChange={handleUpdateFilters}
              />
            </div>
          </div>
          <div className="form-control">
            <button
              className="clear-btn"
              onClick={() => dispatch(clearFilters())}
            >
              clear filters
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Filters;
