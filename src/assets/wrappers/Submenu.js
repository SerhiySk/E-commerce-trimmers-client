import styled from 'styled-components';
const Wrapper = styled.div`
  .submenu {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .submenu {
      display: block;
      position: fixed;
      top: 7rem;
      left: 50%;
      width: var(--fluid-width);
      max-width: var(--max-width);
      background: var(--white);
      padding: 2rem;
      transform: rotateX(-90deg) translateX(-50%);
      transform-origin: top;
      perspective: 1000px;
      border-radius: var(--borderRadius);
      visibility: hidden;
      opacity: 0;
      transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
      z-index: -1;
    }
    .show-submenu {
      visibility: visible;
      opacity: 1;
      transform: rotateX(0deg) translateX(-50%);
      z-index: 10;
    }
    .submenu h5 {
      margin-bottom: 1rem;
      color: var(--primary-700);
    }
    .submenu-links {
      display: grid;
      row-gap: 0.5rem;
    }
    .submenu-links a {
      display: block;
      color: var(--grey-900);
      text-transform: capitalize;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .submenu-links svg {
      color: var(--grey-500);
    }
  }
`;
export default Wrapper;
