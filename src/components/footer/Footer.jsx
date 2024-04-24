import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css"

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer__links">
        <div className="footer__logo">
          <div className="footer__logo--line"></div>
          <div className="footer__logo--lines"></div>
          <div className="footer__logo--line"></div>
          <div className="footer__logo--lines"></div>
          <div className="footer__logo--line"></div>
          <h1>ACME</h1>
        </div>
        <div className="footer__links--socials">
            <FaSquareXTwitter className="links"/>
            <FaFacebook className="links"/>
            <AiFillInstagram className="links"/>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Acme Inc. &copy;{year}</p>
      </div>
    </div>
  )
}

export default Footer
