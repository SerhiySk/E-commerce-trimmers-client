import SingleOrderProduct from './SingleOrderProduct';

const SingleOrderProducts = ({ products }) => {
  if (products.length === 1)
    return (
      <div className="container-items products-one">
        <SingleOrderProduct {...products[0]} />
      </div>
    );
  if (products.length === 2)
    return (
      <div className="container-items products-two">
        <SingleOrderProduct {...products[0]} />
      </div>
    );
  return (
    <div className="container-items">
      {products.map((product, ind) => (
        <SingleOrderProduct key={ind} {...product} />
      ))}
    </div>
  );
};
export default SingleOrderProducts;
