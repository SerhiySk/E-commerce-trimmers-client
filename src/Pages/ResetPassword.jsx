import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FormRow from '../components/FormRow';
import Wrapper from '../assets/wrappers/RegisterPage';
import { resetPassword } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const { isLoading } = useSelector(store => store.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();

  const handleChange = e => {
    setPassword(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!password) return toast.error('Please provide your email');
    const asyncWrapper = async () => {
      const { error } = await dispatch(
        resetPassword({
          password,
          token: query.get('token'),
          email: query.get('email'),
        })
      );
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
        <h2 className="form-title">reset password</h2>
        {/* single form row */}
        <FormRow
          type={'password'}
          name={'password'}
          value={password}
          placeholder={'password'}
          handleChange={handleChange}
        />
        {/* end of single form row */}
        <button
          type="submit"
          className="btn btn-block btn-round btn-form"
          disabled={isLoading}
        >
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default ResetPassword;
