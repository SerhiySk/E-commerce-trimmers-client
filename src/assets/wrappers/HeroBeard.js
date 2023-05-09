import styled from 'styled-components';
const Wrapper = styled.section`
  padding-top: 1rem;
  margin: 0 auto;
  max-width: 1600px;
  .img-container {
    display: grid;
    grid-template-rows: calc((100vh - 10rem));
  }
  .hero-center {
    margin-top: 1rem;
    position: relative;
    max-width: 1600px;
  }
  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
  @media (min-width: 800px) {
    .img-container {
      display: grid;
      grid-template-columns: repeat(2, calc(100vw / 2));
    }
    .img-2 {
      display: block;
    }
  }
  @media (min-width: 1092px) {
    .img-container {
      grid-template-columns: repeat(3, calc(100vw / 3));
    }

    .img-3 {
      display: block;
    }
  }
  @media (min-width: 1600px) {
    .img-container {
      grid-template-columns: repeat(3, calc(1600px / 3));
    }
  }
`;

export default Wrapper;
