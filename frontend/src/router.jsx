import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './App';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<HomeScreen />}></Route>
        <Route path="/product/:id" element={<ProductScreen />}></Route>
      </Route>
    </>
  )
);

const Router = () => {
  return <RouterProvider router={Routes} />;
};

export default Router;
