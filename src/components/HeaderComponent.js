import { useState } from 'react';
import foodLogo from '../../Images/foodLogo.jpg'
import userIcon from '../../Images/user-icon.jpg'
import { Link } from 'react-router-dom';

const HeaderComponent = () => {

  const [status,setStatus] = useState("Login")
  const handleClick = () => {
    setStatus((status==="Login")?"LogOut":"Login")
  }

    return (
      <>
        <div className="header">
          <div className="logo">
            <img src={foodLogo} alt="Logo" />
          </div>
          <div className="nav-items">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About us</Link></li>
              <li><Link to='/contact'>Contact us</Link></li>
              <li><Link to='/cart'>Cart</Link></li>
              <li><button className="status-btn" onClick={handleClick}>{status}</button></li>
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