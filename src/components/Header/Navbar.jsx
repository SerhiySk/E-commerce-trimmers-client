import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';
import Wrapper from '../../assets/wrappers/Navbar';
import ProfileIcons from './ProfileIcons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../features/user/userSlice';
import Logo from '../Logo';
const Navbar = () => {
  const { isSidebarOpen } = useSelector(store => store.user);
  const dispatch = useDispatch();
  const handleSubmenu = e => {
    console.log(1);
  };
  const openSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="nav-toggle" onClick={openSidebar}>
          <FaBars />
        </button>
        <Logo />
        <NavLinks />
        <ProfileIcons />
      </div>
    </Wrapper>
  );
};
export default Navbar;
