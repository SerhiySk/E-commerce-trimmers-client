import React, { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/VerifyPage';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../features/auth/authSlice';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Verify = () => {
  const [isError, setIsError] = useState(false);
  const { isLoading } = useSelector(store => store.auth);
  const query = useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      const verificationToken = query.get('token');
      const email = query.get('email');
      const asyncWrapper = async () => {
        const { error } = await dispatch(
          verifyEmail({
            verificationToken,
            email,
          })
        );
        if (error) setIsError(true);
      };
      asyncWrapper();
    }
  }, []);

  if (isLoading) {
    return (
      <Wrapper className="page-100">
        <h2>Loading...</h2>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper className="page-100">
        <h4>There was an error, please double check your verification link </h4>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="page-100">
      <div>
        <h2>Account Confirmed</h2>
        <Link to="/register" className="btn btn-filled">
          Please login
        </Link>
      </div>
    </Wrapper>
  );
};

export default Verify;
