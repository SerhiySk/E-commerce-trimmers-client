import Wrapper from '../../assets/wrappers/TabProfile';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../features/user/userSlice';

const TabProfile = ({ closeTab }) => {
  const { user } = useSelector(store => store.user);

  // useSelector(store => store.user);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUser());
    closeTab();
  };
  return (
    <Wrapper>
      <div className="tab-container">
        <ul>
          {user ? (
            <>
              <Link to={'/profile'} onClick={closeTab}>
                profile
              </Link>
              <Link to={'/orders'} onClick={closeTab}>
                orders
              </Link>
              <Link to={'/'} onClick={handleClick}>
                logout
              </Link>
            </>
          ) : (
            <Link to={'/register'} onClick={closeTab}>
              login
            </Link>
          )}
        </ul>
      </div>
    </Wrapper>
  );
};
export default TabProfile;
