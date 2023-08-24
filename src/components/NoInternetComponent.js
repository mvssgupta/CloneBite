import noInternetImage from '../../Images/no-internet.jpg';

const NoInternetComponent = () => {
  return <>
    <img src={noInternetImage} alt="Internet Connecion Lost" />
    <h1>Check your Internet Conncetion.</h1>
  </>;
};

export default NoInternetComponent;
