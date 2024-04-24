import {Link} from "react-router-dom"
import './shop.css'
 
const Shop = () => {
  return (
    <div className="shop">
      <div className="shop__header">
        <h1>Shop Our Products</h1>
      </div>
      <div className="shop__body">
        <div className="shop__body--top">
          <Link to="/product/white-tent" className="link">Featured Item</Link>
          <div>
            <h5>White Tent</h5>
            <p>$ 200.00 USD</p>
          </div>
        </div>
        <div className="shop__body--bottom">
          <div className="shop__bottom--left">
            <h4>Shop by Category</h4>
            <Link className="link" to="/product/gift-card">Gift Cards</Link>
            <Link className="link" to="/product/white-tent">Tents</Link>
            <Link className="link" to="/product/tin-coffee-tumbler">Accessories</Link>
            <Link className="link" to="/product/blue-pack">Packs</Link>
          </div>
          <div className="shop__bottom--right">
            <div className="shop__right--items">
              <div className="one"></div>
              <h4>Gift Card</h4>
              <p>$ 25.00 USD</p>
              <Link to="/product/gift-card" className="link">Details</Link>
            </div>
            <div className="shop__right--items">
              <div className="two"></div>
              <h4>Tin Coffee Tumbler</h4>
              <p>$ 35.00 USD</p>
              <Link to="/product/tin-coffee-tumbler" className="link">Details</Link>
            </div>
            <div className="shop__right--items">
              <div className="three"></div>
              <h4>Blue Canvas Pack</h4>
              <p>$ 95.00 USD</p>
              <Link to="/product/blue-pack" className="link">Details</Link>
            </div>
            <div className="shop__right--items">
              <div className="four"></div>
              <h4>Green Canvas Pack</h4>
              <p>$ 125.00 USD</p>
              <Link to="/product/green-pack" className="link">Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
