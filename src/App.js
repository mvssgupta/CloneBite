import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Body from './components/Body';
import HeaderComponent from './components/HeaderComponent';
import AboutUs from './components/AboutUs';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Body />,
      },
      {
        path: 'about',
        element: <AboutUs />,
      },
      {
        path: 'contact',
        element: <ContactUs />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'restaurant/:resId',
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <ErrorComponent />,
  },
]);

// creating root using createRoot API where the data need to be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
// finally using render method we are rendering the content
root.render(<RouterProvider router={appRouter} />);
