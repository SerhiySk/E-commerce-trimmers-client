import styled from 'styled-components';
import { formatPrice } from '../../utils/helpers';
import moment from 'moment';
import { Link } from 'react-router-dom';
import SingleOrderProducts from './SingleOrderProducts';
const OrderItem = ({
  _id: id,
  createdAt,
  status,
  orderItems,
  total,
  shippingFee,
}) => {
  return (
    <Wrapper>
      <div className="content">
        <h5 className="date">{moment(createdAt).format('MMM Do')}</h5>
        <h5 className="status">{status}</h5>
        <SingleOrderProducts products={orderItems} />
        <h5 className="price">{formatPrice(total)}</h5>
        <Link to={`/orders/${id}`} className="btn-view">
          View
        </Link>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};
export default OrderItem;
const Wrapper = styled.div`
  display: block;
  .container-items {
    display: flex;
    position: relative;
    overflow: hidden;
    gap: 0.5rem;
  }
  .container-items:hover {
    overflow-x: auto;
  }

  img {
    object-fit: cover;
    border-radius: var(--borderRadius);
  }
  .content {
    display: grid;

    justify-items: center;
    align-items: center;
    column-gap: 1rem;
    .container-img {
      flex: 0 0 auto;
    }
    h5 {
      color: var(--grey-600);
      font-weight: 400;
    }
  }
  .btn-view {
    background: var(--primary-600);
    border-radius: var(--borderRadius);
    color: var(--white);
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 776px) {
    .content {
      grid-template-areas:
        'a c d'
        'b c e';
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 15vw 50vw 15vw;
      row-gap: 1rem;
      .container-items {
        grid-area: c;
        width: 40vw;
      }
      .container-img {
        height: 5rem;
        width: 5rem;
      }

      .date {
        grid-area: a;
      }
      .status {
        grid-area: b;
      }
      .price {
        grid-area: d;
      }
    }
    .btn-view {
      grid-area: e;
      padding: 1rem 0.4rem;
    }
  }
  @media (min-width: 776px) {
    .container-items {
      width: 200px;
    }
    .container-img {
      height: 4rem;
      width: 8rem;
    }

    .content {
      grid-template-columns: 1fr 1fr 400px 1fr auto;
    }
    .btn-view {
      padding: 1rem 0.4rem;
    }
  }
`;
