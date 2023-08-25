import { useRouteError } from 'react-router-dom';
import pageNotFound from '../../Images/pageNotFound.jpg';
const ErrorComponent = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-4/6">
      <img className="h-72 w-96" src={pageNotFound} />
      <h1>The page you're looking is {error.statusText}</h1>
    </div>
  );
};

export default ErrorComponent;
