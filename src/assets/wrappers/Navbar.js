import styled from 'styled-components';
const Wrapper = styled.nav`
  background: var(--white);
  box-shadow: var(--shadow-1);
  z-index: 10;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .links-container {
    display: none;
  }
  button {
    background: transparent;
    border-color: transparent;
    color: var(--primary-900);
  }
  .nav-toggle {
    font-size: 1.5rem;

    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--primary-700);
    transform: scale(1.05);
  }

  .links-profile {
    display: flex;
    gap: 2rem;
    margin-right: 2rem;
    a {
      color: var(--primary-900);
      transition: var(--transition);
    }
    a:hover {
      color: var(--primary-300);
    }
    button {
      cursor: pointer;
      transition: var(--transition);
    }
    button:hover {
      color: var(--primary-300);
    }
    .big-screen-only {
      display: none;
    }
  }
  @media screen and (min-width: 870px) {
    .links a {
      color: var(--grey-700);
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: var(--letterSpacing);
      display: block;
      padding: 0;
      transition: var(--transition);
    }
    .links a:hover {
      padding: 0;
      background: transparent;
      color: var(--primary-500);
    }

    .links-container {
      display: block;
      height: auto !important;
      transition: var(--transition);
    }
    .profile-links-container {
      height: auto !important;
      transition: var(--transition);
    }
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      padding: 1rem;
    }

    .nav-toggle {
      display: none;
    }
    .links {
      display: flex;
      gap: 2rem;
    }

    .links a:hover {
      padding: 0;
      background: transparent;
    }
    .links-profile {
      display: flex;
    }
    .links-profile {
      .big-screen-only {
        display: block;
      }
    }
  }
`;

export default Wrapper;
