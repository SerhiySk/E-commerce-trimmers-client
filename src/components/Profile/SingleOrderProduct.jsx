import { Link } from 'react-router-dom';
const SingleOrderProduct = item => {
  return (
    <div className="container-img">
      <Link to={`/products/${item.product}`}>
        <img src={`http://localhost:3000${item.image}`} alt={item.name} />
      </Link>
    </div>
  );
};
export default SingleOrderProduct;
