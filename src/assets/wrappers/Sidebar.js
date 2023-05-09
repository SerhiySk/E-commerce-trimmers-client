import styled from 'styled-components';
const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: var(--white);
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: var(---red-dark);
    transition: var(--transition);
    transform: translate(-100%);
  }
  .logo {
    text-transform: none;
    color: var(--black);
    letter-spacing: 3px;
    font-weight: 700;
    .logo-styled {
      color: var(--primary-700);
    }
  }
  .show-sidebar {
    transform: translate(0);
  }

  .container-search {
    padding: 1rem 0;
  }

  button {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    cursor: pointer;
  }

  @media screen and (min-width: 676px) {
    .sidebar {
      width: 400px;
    }
  }
  /* toggle class */

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    color: var(--red-dark);
  }

  summary {
    transition: var(--transition);
  }
  .links {
    div {
      padding-left: 1rem;
      transition: 3s ease-in-out all;
    }
    a,
    summary {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      text-transform: uppercase;
      padding: 1rem 1.5rem;
      color: var(--grey-700);
      transition: var(--transition);
      letter-spacing: var(--letterSpacing);
    }
    summary {
      justify-content: space-between;
    }
    a:hover,
    summary:hover {
      background: var(--grey-100);
      color: var(--grey-800);
      cursor: pointer;
    }
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;
export default Wrapper;
