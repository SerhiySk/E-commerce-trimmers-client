import Navbar from './Navbar';
import PromotionSlider from './PromotionSlider';
import Sidebar from './Sidebar';
import Wrapper from '../../assets/wrappers/Header';

const Header = () => {
  return (
    <>
      <Wrapper>
        <PromotionSlider />
        <Navbar />
      </Wrapper>
      <Sidebar />
    </>
  );
};
export default Header;
