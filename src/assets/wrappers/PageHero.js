import styled from 'styled-components';
const Wrapper = styled.section`
  margin: 1rem;
  border-top: 2px solid var(--primary-900);
  border-bottom: 2px solid var(--primary-900);
  height: 10vh;
  display: flex;
  align-items: center;

  color: var(--primary-900);
  a {
    color: var(--primary-900);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--primary-700);
  }
`;
export default Wrapper;
