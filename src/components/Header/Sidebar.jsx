import { FaTimes } from 'react-icons/fa';
import { links } from '../../utils/constants';
import { Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, toggleSidebar } from '../../features/user/userSlice';
import Logo from '../Logo';
const Sidebar = () => {
  const { isSidebarOpen, user } = useSelector(store => store.user);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(toggleSidebar());
  };
  const handleLogoutClick = () => {
    dispatch(logoutUser());
    closeSidebar();
  };

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className="sidebar-header">
          <Logo />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <div className="container">
          <div className="links">
            <ul>
              {links.map(link => {
                const { id, url, text } = link;
                return (
                  <Link key={id} to={url} onClick={closeSidebar}>
                    {text}
                  </Link>
                );
              })}
              <Link
                key={6}
                to={user ? 'profile' : 'register'}
                onClick={closeSidebar}
              >
                {user ? 'profile' : 'login'}
              </Link>
              {user && (
                <>
                  <Link key={7} to={'/orders'} onClick={closeSidebar}>
                    {'orders'}
                  </Link>
                  <Link key={8} to={'/'} onClick={handleLogoutClick}>
                    {'logout'}
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};
export default Sidebar;
