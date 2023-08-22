import foodLogo from '../../Images/foodLogo.jpg'
import userIcon from '../../Images/user-icon.jpg'

const HeaderComponent = () => {
    return (
      <>
        <div className="header">
          <div className="logo">
            <img src={foodLogo} alt="Logo" />
          </div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Cart</li>
            </ul>
          </div>
          <div className="user-icon">
            <img src={userIcon} alt="User Icon" />
          </div>
        </div>
      </>
    );
  };

  export default HeaderComponent;