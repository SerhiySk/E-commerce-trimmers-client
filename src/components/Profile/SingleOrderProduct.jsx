import { Link } from 'react-router-dom';
import { serverDomain } from '../../utils/constants';
const SingleOrderProduct = item => {
  return (
    <div className="container-img">
      <Link to={`/products/${item.product}`}>
        <img src={serverDomain + item.image} alt={item.name} />
      </Link>
    </div>
  );
};
export default SingleOrderProduct;
