import { IoClose } from "react-icons/io5";
import "./cart.css"
import PropTypes from "prop-types";

const Cart = ({isOpen, isClose}) => {
  const toggleClose = () =>{
    isClose()
  }
  return (
    <div>
      <div className={`background__filter ${ isOpen ? 'open' : '' }`} onClick={toggleClose}></div>
      <div className={`cart ${ isOpen ? 'open' : '' }`}>
        <div className="cart__top">
          <p>Your Cart</p>
          <IoClose className="cart__top--close" onClick={toggleClose}/>
        </div>
        <div className="cart__body">
        </div>
      </div>
    </div>
  )
}
Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isClose: PropTypes.func.isRequired
};

export default Cart
