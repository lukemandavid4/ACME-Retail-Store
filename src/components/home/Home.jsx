import { Link } from "react-router-dom"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="home__back">
        <h1>Serving you <br />since 1989.</h1>
        <p>Acme Outdoors is and outdoor and adventure <br />shop located in the Boathouse District in <br />Oklahoma City.</p>
        <Link to="/shop" className="home__back--link">Shop Merch</Link>
        <div className="home__back--overlay"></div>
      </div>
      <div className="home__hero">
        <div className="home__hero--top">
          <div className="side__left">
            <h4>WAYS TO SUPPORT</h4>
            <p>Support Acme Outdoors.</p>
          </div>
          <div className="side__right">
            <p>COVID-19 has forced us to close our retail space, but we need <br />support from patrons like yourself now more than ever. Below, we&apos;ve <br />listed the best ways to help us through this season.</p>
          </div>
        </div>
        <div className="home__hero--box">
          <div className="aside__one">
            <h1>SHOP <br />PRODUCTS</h1>
            <p>Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!</p>
          </div>
          <div className="aside__two">
            <h1>DONATE</h1>
            <p>Since we&apos;ve changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.</p>
          </div>
          <div className="aside__three">
            <h1>BUY <br />GIFT CARDS</h1>
            <p>Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.</p>
          </div>
        </div>
      </div>
      <div className="home__back--two">
        <h1>How we&apos;re keeping you <br />safe during COVID-19</h1>
        <p>As an outdoor shop, we&apos;ve taken precautionary <br />measures to ensure the safety of all our <br /> customers and team members.</p>
        <Link to="/announcement" className="link">Read Our Statement</Link>
        <div className="overlay"></div>
      </div>
    </div>
  )
}

export default Home
