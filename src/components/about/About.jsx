import './about.css'
import {Link} from "react-router-dom"
import { BsPatchCheck } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1>Your Adventure <br />Awaits</h1>
        <p>Acme Outdoors has everything you need to <br /> help you get started today. Check out our <br /> wonderful collection of gear that will make your <br /> next adventure complete.</p>
        <Link to="/shop" className='home__back--link'>Shop Merch</Link>
        <div className="about__header--overlay"></div>
      </div>
      <div className="about__body">
        <div className="about__body--top">
          <h4>WHY ACME OUTDOORS?</h4>
          <h1>We&apos;re the best in the business.</h1>
          <p>From more than 30 years, we’ve been leading the way across Oklahoma —  <br />creating the best possible customer experience since 1989.</p>
        </div>
        <div className="about__body--middle">
          <div className="about__middle">
            <BsPatchCheck className='about__middle--icons'/>
            <h2>Lifetime Warranty</h2>
            <p>All our products — whether we make them or not — are backed by our lifetime warranty.</p>
          </div>
          <div className="about__middle">
            <LuShoppingCart className='about__middle--icons'/>
            <h2>Shopping Experience</h2>
            <p>All our products — whether we make them or not — are backed by our lifetime warranty.</p>
          </div>
          <div className="about__middle">
            <TbTruckDelivery className='about__middle--icons'/>
            <h2>On-time Delivery</h2>
            <p>All our products — whether we make them or not — are backed by our lifetime warranty.</p>
          </div>
          <div className="about__middle">
            <FiMessageSquare className='about__middle--icons'/>
            <h2>Best in Class Service</h2>
            <p>All our products — whether we make them or not — are backed by our lifetime warranty.</p>
          </div>
        </div>
        <div className="about__body--bottom">
          <div className="about__bottom">
          <h1>Meet the Owners</h1>
          <p>John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to explore the landscape in Nepal.</p>
          <p>While on the trip, John and Jane realized that they had one common love — the love for hiking and the love for being outdoors.
          </p>
          <p>Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store centered around theirpassions.</p>
          <p>While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side of the business, building this website in the best design platform on the web — Webflow!</p>
          <p>In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts around the state.</p>
          <p>To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where they came from.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
