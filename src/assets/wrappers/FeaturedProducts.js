import styled from 'styled-components';
const Wrapper = styled.section`
  padding-top: 2rem;
  background: var(--grey-100);
  .title-container {
    padding-bottom: 4rem;
  }
  .featured {
    padding-bottom: 2rem;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
      border-radius: var(--borderRadius);
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Wrapper;
