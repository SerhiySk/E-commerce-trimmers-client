import { GoSearch } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../assets/wrappers/SearchForm';
import { useEffect, useMemo, useState } from 'react';
import { handleChange } from '../../features/products/productsSlice';
const SearchForm = () => {
  const [localSearch, setLocalSearch] = useState('');
  const dispatch = useDispatch();

  // RESET when opening page
  useEffect(() => {
    dispatch(handleChange({ name: 'search', value: localSearch }));
  }, []);
  const handleSearch = e => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const debounce = () => {
    let timeoutID;
    return e => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleSearch(e);
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  // useEffect(() => {
  //   optimizedDebounce();
  // }, [localSearch]);
  return (
    <Wrapper>
      <div className="container-search">
        <input
          type="text"
          name="search"
          className="search"
          id="search"
          placeholder="search"
          value={localSearch}
          onChange={optimizedDebounce}
        />
        <label htmlFor="search" className="label-search">
          Search
        </label>
      </div>
      <button type="submit" className="submit-search">
        <GoSearch />
      </button>
    </Wrapper>
  );
};

export default SearchForm;
