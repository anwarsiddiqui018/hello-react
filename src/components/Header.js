import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnManeReact] = useState("Login");


  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is btnNameReact => useEffect is called everytime btnNameReact is updated

  useEffect(() =>{
    // console.log("useEffect Called")
  }, [btnNameReact]);


  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About Us</Link>
          </li>
          <li>
            <Link to="/contact" >Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login" ?
              setBtnManeReact("Logout") :
              setBtnManeReact("Login")
            }}
          > 
            {btnNameReact}

          </button>
        </ul>
      </div>
    </div>
  );
};


export default Header;