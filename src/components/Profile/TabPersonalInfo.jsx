import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import FormRow from '../FormRow';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from '../../assets/wrappers/FormProfile';
import { updateUser } from '../../features/user/userSlice';

function TabPersonalInfo() {
  const { user, isLoading } = useSelector(state => state.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    if (!name || !email) return toast.error('Please fill out all fields');
    dispatch(updateUser({ name, email }));
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <h2 className="form-title">edit personal info</h2>

      {/* name field */}

      <FormRow
        type={'text'}
        name={'name'}
        value={name}
        placeholder={'name'}
        handleChange={e => setName(e.target.value)}
      />

      <FormRow
        type={'email'}
        name={'email'}
        value={email}
        placeholder={'email'}
        handleChange={e => setEmail(e.target.value)}
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
export default TabPersonalInfo;
