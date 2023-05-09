import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import { showMe } from '../features/user/userSlice';
const PrivateRoute = ({ children }) => {
  const [isError, setIsError] = useState(false);

  const [isAllowed, setIsAllowed] = useState(false);
  const { user } = useSelector(store => store.user);
  const dispatch = useDispatch();
  const asyncWrapper = async () => {
    if (!user) {
      const data = await dispatch(showMe());
      if (data.error) setIsError(true);
      else setIsAllowed(true);
    }
  };
  useEffect(() => {
    if (!user) asyncWrapper();
  }, []);
  if (isError) return <Navigate to={'/'} />;
  else if (isAllowed || user) return children;
  else return <Loading />;
};
export default PrivateRoute;
