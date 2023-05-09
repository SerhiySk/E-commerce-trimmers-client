import styled from 'styled-components';

const Wrapper = styled.section`
  height: calc(100vh - 10rem);
  display: grid;
  place-items: center;
  .form {
    width: 90vw;
    max-width: var(--fixed-width);
    max-height: 600px;
    background: var(--white);
    border-radius: 1.2rem;
    box-shadow: var(--shadow-2);
    padding: 2rem 4rem;
    transition: var(--transition);
  }
  .form:hover {
    box-shadow: var(--shadow-3);
  }
  .form-title {
    /* font-size: var(--large-text); */
    font-weight: var(--font-weight-thick);
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-label {
    display: block;
    font-size: var(--small-text);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  .form-input,
  .form-textarea {
    text-transform: none;
    width: 100%;
    padding: 0.8rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
  }

  .form-input:focus {
    outline: none;
    transition: ease-in-out 0.3s;
    border: 1.2px solid var(--primary-600);
    color: var(--primary-900);
  }

  .form-row {
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--primary-600);
    font-weight: 400;
  }

  .switch-form {
    margin-top: 4rem;
    text-align: center;
  }
  .btn-form {
    color: var(--primary-800);
    font-weight: 900;
    font-family: var(--bodyFont);
    margin-top: 1.5rem;
    padding: 0.4rem 0.5rem;
    font-size: 1.5rem;
    background: transparent;
    border: 2px solid var(--primary-800);
  }
  .btn-transparent {
    background: transparent;
    border: transparent;
    color: var(--primary-600);
    font-family: var(--headingFont);
    font-weight: 700;

    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .forgot-password {
    margin-top: 0.5rem;
  }
  .btn-form:hover {
    background: var(--primary-800);
    color: var(--white);
  }
  input[type='checkbox']:checked + label::after {
    content: '';
    position: absolute;
    width: 1.2ex;
    height: 0.4ex;
    top: 0.9ex;
    left: 0.4ex;
    border: 3px solid var(--primary-700);
    border-top: none;
    border-right: none;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  input[type='checkbox'] {
    line-height: 2.1ex;
  }

  input[type='radio'],
  input[type='checkbox'] {
    position: absolute;
    left: -999em;
  }

  input[type='checkbox'] + label {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  input[type='checkbox'] + label::before {
    content: '';
    display: inline-block;
    vertical-align: -25%;
    height: 2ex;
    width: 2ex;
    background-color: white;
    border: 1px solid var(--grey-300);
    border-radius: 4px;
    box-shadow: inset 0 2px 5px var(--backgroundColor);
    margin-right: 0.5em;
  }
`;

export default Wrapper;
