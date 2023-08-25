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
        <div className="flex items-center justify-between bg-neutral-100 p-2.5">
          <div className="w-20 h-20">
            <img src={foodLogo} alt="Logo" />
          </div>
          <div className="nav-items  px-5 py-0">
            <ul className="text-2xl flex list-none">
              <li className="m-2.5 p-2.5"><Link className="no-underline text-black hover:no-underline hover:font-bold hover:bg-red-600"  to='/'>Home</Link></li>
              <li className="m-2.5 p-2.5"><Link className="no-underline text-black hover:no-underline hover:font-bold hover:bg-red-600"  to='/about'>About us</Link></li>
              <li className="m-2.5 p-2.5"><Link className="no-underline text-black hover:no-underline hover:font-bold hover:bg-red-600"  to='/contact'>Contact us</Link></li>
              <li className="m-2.5 p-2.5"><Link className="no-underline text-black hover:no-underline hover:font-bold hover:bg-red-600"  to='/cart'>Cart</Link></li>
              <li className="m-2.5 p-2.5"><button className="text-xl px-[5px] py-0" onClick={handleClick}>{status}</button></li>
            </ul>
          </div>
          <div className="w-12 h-12">
            <img src={userIcon} alt="User Icon" />
          </div>
        </div>
      </>
    );
  };

  export default HeaderComponent;