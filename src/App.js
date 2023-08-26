import React ,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Body from './components/Body';
import HeaderComponent from './components/HeaderComponent';
// import AboutUs from './components/AboutUs';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import useOnlineStatus from './utils/useOnlineStatus'
import NoInternetComponent from './components/NoInternetComponent'
const AboutUs = lazy(()=>import("./components/AboutUs"))
import { Provider } from 'react-redux';
import ourAppReduxStore from './utils/ourAppReduxStore';

const App = () => {

  const onlineStatus = useOnlineStatus();
  if(onlineStatus===false)
  {
    return <NoInternetComponent/>
  }

  return (
    <Provider store={ourAppReduxStore}>
      <HeaderComponent />
      <Outlet />
    </Provider>
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
        element: <Suspense fallback={<>Loading the about component...</>}><AboutUs /></Suspense>,
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
