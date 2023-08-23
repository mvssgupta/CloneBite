import { useRouteError } from 'react-router-dom';
import pageNotFound from '../../Images/pageNotFound.jpg';
const ErrorComponent = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <img className="error-img" src={pageNotFound} />
      <h1>The page you're looking is {error.statusText}</h1>
    </div>
  );
};

export default ErrorComponent;
