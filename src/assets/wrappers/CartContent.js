import styled from 'styled-components';

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    border-color: transparent;
    text-transform: capitalize;

    padding: 0.25rem 0.5rem;
    background: var(--primary-500);
    color: var(--white);
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
  }
  .clear-btn {
    background: var(--black);
  }
`;
export default Wrapper;
