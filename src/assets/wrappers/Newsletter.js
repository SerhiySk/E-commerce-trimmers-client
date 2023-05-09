import styled from 'styled-components';

const Wrapper = styled.section`
  /* padding: 5rem 1rem; */
  h3 {
    text-transform: none;
    margin-bottom: 1rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--grey-500);
  }
  .contact-form {
    margin-top: 2rem;
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--black);
  }
  .form-input {
    /* border-right: none; */
    color: var(--grey-300);

    border-top-left-radius: var(--borderRadius);
    border-bottom-left-radius: var(--borderRadius);
    /* border-top-right-radius: 0;
    border-bottom-right-radius: 0; */
  }
  .submit-btn {
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
  .form-input::placeholder {
    color: var(--black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--black);
  }
  .submit-btn:hover {
    color: var(--white);
  }
  @media (min-width: 992px) {
    .contact-form {
      margin: 0;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 8rem 0;
  }
`;
export default Wrapper;
