import { useDispatch, useSelector } from 'react-redux';
import OrderItem from './OrderItem';
const OrdersList = () => {
  const { ordersPerPage } = useSelector(store => store.order);

  return (
    <section>
      {ordersPerPage.map((val, ind) => (
        <OrderItem key={ind} {...val} />
      ))}
    </section>
  );
};
export default OrdersList;
