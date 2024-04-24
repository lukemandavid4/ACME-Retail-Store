import {Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import "./navbar.css"
import PropTypes from "prop-types"
import { useState } from "react";

const NavBar = ({toggleCart}) => {
  const [isSideBar, setIsSideBar] = useState(false)
  const toggleSideBar = () =>{
    setIsSideBar(!isSideBar)
  }
  return (
    <div className="section">
      <div className="section__logo">
        <div className="section__logo--line">
          <div className="line"></div>
          <div className="lines"></div>
          <div className="line"></div>
          <div className="lines"></div>
          <div className="line"></div>
        </div>
        <Link to="/" className="section__logo--home">ACME</Link>
      </div>
      <div className="section__right">
        <div className={`section__navlinks ${isSideBar ? 'display': ''}`}>
          <Link to="/" className="section__navlinks--links">Home</Link>
          <Link to="/about" className="section__navlinks--links">About</Link>
          <Link to="/shop" className="section__navlinks--links">Shop</Link>
          <Link to="/donate" className="section__navlinks--links">Donate</Link>
          <Link to="/contact" className="section__navlinks--links">Contact</Link>
        </div>
        <Link to="" className="section__navlinks--cart" onClick={toggleCart}>
          <FaShoppingCart />
          <span>0</span>
        </Link>
        <div className="section__hamburger" onClick={toggleSideBar}>
          <FaAlignLeft />
        </div>
      </div>
    </div>
  )
}
NavBar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default NavBar
