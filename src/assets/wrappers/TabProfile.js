import styled from 'styled-components';
const Wrapper = styled.div`
  position: absolute;
  transform: translateX(-40%);
  transition: var(--transition);
  border-top: 1px solid var(--grey-400);
  width: 8rem;
  z-index: 1;

  .tab-container {
    background-color: var(--white);
    box-shadow: var(--shadow-2);
  }

  a {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    padding: 1rem;
    color: var(--grey-700);
    transition: var(--transition);
    letter-spacing: var(--letterSpacing);
  }
  @media screen and (max-width: 870px) {
    display: none;
  }
`;
export default Wrapper;
