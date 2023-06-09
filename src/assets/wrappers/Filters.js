import styled from 'styled-components';
const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--grey-200);
    border-radius: var(--borderRadius);
    border-color: transparent;
    letter-spacing: var(--letterSpacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--letterSpacing);
    color: var(--grey-500);
    cursor: pointer;
  }

  .company {
    background: var(--grey-200);
    margin-top: 0.7rem;
    border-radius: var(--borderRadius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
    color: var(--grey-500);
  }
  .active {
    opacity: 1;
  }
  .all-btn.active {
    border-bottom: 1px solid var(--grey-500);
  }
  .category.active {
    border-bottom: 1px solid var(--grey-500);
  }
  .price {
    margin-top: 0.25rem;

    margin-bottom: 0.5rem;
    color: var(--primary-800);
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .clear-btn {
    background: var(--red-dark);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;
export default Wrapper;
