import Wrapper from '../assets/wrappers/Logo';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <Wrapper className="logo">
      <Link to={'/'} className="link">
        Trim<span className="logo-styled">man</span>
      </Link>
    </Wrapper>
  );
};
export default Logo;
