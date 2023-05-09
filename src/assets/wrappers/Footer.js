import styled from 'styled-components';
const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--black);
  text-align: center;
  .logo-styled {
    color: var(--primary-700);
  }

  h5 {
    color: var(--white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;
export default Wrapper;