import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Register,
  Products,
  Profile,
  Orders,
  Order,
  SingleProduct,
  Verify,
  ForgotPassword,
  ResetPassword,
} from './Pages';
import { Header } from './components/Header';
import { Footer, PrivateRoute } from './components';

import { getAllProducts } from './features/products/productsSlice';
import { showMe } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMe());
    dispatch(getAllProducts());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders/:orderID"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />

        <Route path="register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<SingleProduct />} />
        <Route path="/user/verify-email" element={<Verify />} />
        <Route path="/user/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
