import styled from 'styled-components';
const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1600px;
  height: calc(100vh - 10rem);
  .hero-center {
    /* position: relative; */
    max-width: 1600px;
  }
  .img-container {
    display: grid;
    grid-template-rows: calc((100vh - 10rem));
  }
  @media (min-width: 800px) {
    .img-container {
      grid-template-columns: repeat(2, calc(100vw / 2));
    }
    .img-2 {
      display: block;
    }
  }
  @media (min-width: 1092px) {
    .img-container {
      grid-template-columns: repeat(2, calc(100vw / 2));

      grid-template-rows: repeat(2, calc((100vh - 10rem) / 2));
      grid-template-areas:
        'a b'
        'a c';
    }
    .img-1 {
      grid-area: a;
    }
    .img-2 {
      grid-area: b;
    }
    .img-3 {
      display: block;
      grid-area: c;
    }
  }
  @media (min-width: 1600px) {
    .img-container {
      grid-template-columns: repeat(2, calc(1600px / 2));
    }
  }
`;
export default Wrapper;
