import { PageHero, PageBtnContainer, Loading } from '../../components';
import { OrdersList, OrdersColumn } from '../../components/Profile';
import { useDispatch, useSelector } from 'react-redux';
import {
  changePage,
  setAllOrders,
  setOrdersPerPage,
} from '../../features/orders/orderSlice';
import { useEffect } from 'react';
import styled from 'styled-components';
const Orders = () => {
  const { page, numOfPages, count, orders, isLoading } = useSelector(
    store => store.order
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllOrders());
  }, []);
  useEffect(() => {
    dispatch(setOrdersPerPage());
  }, [orders, page]);
  if (isLoading) return <Loading />;
  if (count < 1)
    return (
      <div className="page-100 center">
        <h2>No orders yet</h2>
      </div>
    );
  return (
    <Wrapper>
      <PageHero title="orders" />
      <div className="section-center page-100">
        <div className="total-count">
          {' '}
          <p>Total orders: {count}</p>
        </div>
        <OrdersColumn />
        <OrdersList />
        <PageBtnContainer
          page={page}
          numOfPages={numOfPages}
          changePage={changePage}
        />
      </div>
    </Wrapper>
  );
};
export default Orders;

const Wrapper = styled.main`
  .total-count {
    border: 1px solid var(--grey-700);
    padding: 0.5rem;
    width: fit-content;
    margin: 2rem 0;
  }
`;
