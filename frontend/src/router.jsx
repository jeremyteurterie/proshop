import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import App from './App';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<HomeScreen />}></Route>
        <Route path="/product/:id" element={<ProductScreen />}></Route>
        <Route path="/cart" element={<CartScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/register" element={<RegisterScreen />}></Route>

        <Route path="" element={<PrivateRoute />}>
          <Route path="/shipping" element={<ShippingScreen />}></Route>
          <Route path="/payment" element={<PaymentScreen />}></Route>
          <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
          <Route path="/order/:id" element={<OrderScreen />}></Route>
        </Route>
      </Route>
    </>
  )
);

const Router = () => {
  return <RouterProvider router={Routes} />;
};

export default Router;
