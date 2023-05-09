import { links } from '../../utils/constants';
import { Link } from 'react-router-dom';
const NavLinks = () => {
  return (
    <div className="links-container">
      <ul className="links">
        {links.map(link => {
          const { id, url, text } = link;
          return (
            <Link key={id} to={url}>
              {text}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
export default NavLinks;
