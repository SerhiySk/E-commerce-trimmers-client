import { useState } from 'react';
import { TabPassword, TabPersonalInfo } from '../../components/Profile';
import { PageHero } from '../../components';
import Wrapper from '../../assets/wrappers/Profile';

const Profile = () => {
  return (
    <>
      <PageHero title={'profile'} />
      <Wrapper>
        <TabPersonalInfo />
        <TabPassword />
      </Wrapper>
    </>
  );
};
export default Profile;
