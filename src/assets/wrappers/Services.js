import styled from 'styled-components';
const Wrapper = styled.section`
  background: var(--primary-100);
  padding: 2rem 0;
  h3,
  h4 {
    color: var(--primary-100);
  }
  p {
    color: var(--primary-700);
    max-width: 90%;
    margin: 0 auto;
  }

  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--primary-700);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--borderRadius);
    p {
      color: var(--primary-200);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--primary-900);
    color: var(--primary-100);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      p {
        margin-top: 2rem;
      }
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Wrapper;
