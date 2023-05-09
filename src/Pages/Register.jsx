import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { FormRow } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { loginUser, registerUser } from '../features/user/userSlice';

import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  agreeToTerms: false,
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const { user, isLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);
  const handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'agreeToTerms') value = e.target.checked;

    setValues({ ...values, [name]: value });
  };
  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password, agreeToTerms, isMember } = values;
    if ((!isMember && !name) || !email || !password)
      return toast.error('Please fill out all fields');
    if (!isMember && !agreeToTerms)
      return toast.error('To continue, you must agree to our terms');

    // To check if registration was successful
    const asyncWrapper = async () => {
      const { error } = await dispatch(registerUser({ name, email, password }));
      if (!error) setValues(initialState);
    };
    if (isMember) dispatch(loginUser({ email, password }));
    else asyncWrapper();
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form-title">
          {values.isMember ? 'login' : 'create account'}
        </h2>

        {/* name field */}
        {!values.isMember && (
          <FormRow
            type={'text'}
            name={'name'}
            value={values.name}
            placeholder={'name'}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type={'email'}
          name={'email'}
          value={values.email}
          placeholder={'email'}
          handleChange={handleChange}
        />
        <FormRow
          type={'password'}
          name={'password'}
          value={values.password}
          placeholder={'password'}
          handleChange={handleChange}
        />

        {!values.isMember && (
          <div className="form-row">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              className="agree-to-terms"
              checked={values.agreeToTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeToTerms">
              I agree to these <a href="#">Terms and Conditions</a>.
            </label>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-block btn-round btn-form"
          disabled={isLoading}
        >
          {values.isMember ? 'login' : 'register'}
        </button>

        {values.isMember && (
          <p className="forgot-password">
            Forgot your password?{' '}
            <Link to={'/forgot-password'} className="btn-transparent">
              Forgot password
            </Link>
          </p>
        )}

        <p className="switch-form">
          {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
          <button
            type="button"
            className="btn-transparent"
            onClick={toggleMember}
          >
            {values.isMember ? 'Register here' : 'Login here'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
