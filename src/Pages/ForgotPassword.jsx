import { toast } from 'react-toastify';
import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Link, useNavigate } from 'react-router-dom';
import { FormRow } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { sendResetPasswordLink } from '../features/auth/authSlice';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { isLoading } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!email) return toast.error('Please provide your email');
    const asyncWrapper = async () => {
      const { error } = await dispatch(sendResetPasswordLink(email));
      if (!error)
        setTimeout(() => {
          navigate('/register');
        }, 2000);
    };
    asyncWrapper();
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form-title">forgot password</h2>
        <FormRow
          type={'email'}
          name={'email'}
          value={email}
          placeholder={'email'}
          handleChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-block btn-round btn-form"
          disabled={isLoading}
        >
          submit
        </button>
        <p className="switch-form">
          Already a member?{' '}
          <Link to={'/register'} className="btn-transparent">
            Login here
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default ForgotPassword;
