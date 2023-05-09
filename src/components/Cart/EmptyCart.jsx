import { Link } from 'react-router-dom';
import styled from 'styled-components';
const EmptyCart = () => {
  return (
    <Wrapper className="page-100">
      <div className="empty">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="btn btn-filled">
          fill it
        </Link>
      </div>
    </Wrapper>
  );
};
export default EmptyCart;
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;
