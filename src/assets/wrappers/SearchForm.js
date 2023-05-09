import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  max-width: 868px;
  padding-bottom: 1rem;
  position: relative;
  display: flex;
  margin: 0 auto;
  .container-search {
    width: 100%;
    position: relative;
    padding-top: 1rem;
  }
  button {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    cursor: pointer;
  }
  .search {
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--grey-500);
    outline: 0;
    font-size: 1.3rem;
    color: var(--grey-700);
    padding: 7px 0;
    background: transparent;
    transition: var(--transition);
    ::placeholder {
      color: transparent;
    }
    :placeholder-shown + .label-search {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
    :focus + .label-search {
      position: absolute;
      top: 0;
      display: block;
      transition: var(--transition);
      font-size: 1rem;
      color: var(--grey-500);
    }
  }
  .label-search {
    position: absolute;
    top: 0;
    display: block;
    transition: var(--transition);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    color: var(--grey-500);
  }
`;
export default Wrapper;
