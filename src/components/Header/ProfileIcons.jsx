import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { BsFillHandbagFill } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabProfile from './TabProfile';
import Wrapper from '../../assets/wrappers/ProfileIcons';

const ProfileIcons = () => {
  const [isShowTab, setIsShowTab] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.user);
  const closeTab = () => {
    setIsShowTab(false);
  };
  return (
    <div className="profile-links-container">
      <div className="links-profile">
        <Wrapper>
          <button
            key={2}
            className="big-screen-only"
            onClick={() => setIsShowTab(!isShowTab)}
          >
            <FaRegUser size={22} />
          </button>
          {isShowTab && <TabProfile closeTab={closeTab} />}
        </Wrapper>
        <Link key={3} to="/cart" className="screen-small">
          <BsFillHandbagFill size={22} />
        </Link>
      </div>
    </div>
  );
};
export default ProfileIcons;
