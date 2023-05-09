import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import { Link } from 'react-router-dom';
import { setProduct } from '../features/product/productSlice';
import Wrapper from '../assets/wrappers/SingleProductPage';
const SingleProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams().productID;

  const { isProductLoading, product, isProductError } = useSelector(
    store => store.product
  );
  useEffect(() => {
    dispatch(setProduct(id));
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (isProductError) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, []);

  if (isProductLoading) return <Loading />;
  if (isProductError) return <Error />;
  const {
    name,
    price,
    description,
    inventory,
    averageRating: stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section-center">
        <Link to="/products" className="btn btn-filled">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h1>{name}</h1>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {inventory > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p>
            <hr />
            {inventory > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
export default SingleProduct;
