import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import FormRow from '../FormRow';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from '../../assets/wrappers/FormProfile';
import { updateUserPassword } from '../../features/user/userSlice';

const initialState = {
  oldPassword: '',
  newPassword: '',
};

function TabPassword() {
  const [values, setValues] = useState(initialState);
  const { isLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = e => {
    e.preventDefault();
    const { oldPassword, newPassword } = values;
    if (!newPassword || !oldPassword)
      return toast.error('Please fill out all fields');
    dispatch(updateUserPassword(values));
    setValues(initialState);
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <h2 className="form-title">update password</h2>
      {/* name field */}
      <FormRow
        type={'password'}
        name={'oldPassword'}
        value={values.oldPassword}
        placeholder={'old password'}
        handleChange={handleChange}
      />

      <FormRow
        type={'password'}
        name={'newPassword'}
        value={values.newPassword}
        placeholder={'new password'}
        handleChange={handleChange}
      />

      <button
        type="submit"
        className="btn btn-block btn-round btn-form"
        disabled={isLoading}
      >
        submit
      </button>
    </Wrapper>
  );
}
export default TabPassword;
