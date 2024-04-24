import { FaRegMessage } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import './contact.css'

const Contact = () => {
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="contact">
      <div className="contact__section">
        <div className="contact__section--header">
          <h1>Contact Acme Outdoors</h1>
        </div>
        <div className="contact__section--body">
          <div className="section__one">
            <div className="section__one--logo">
              <FaRegMessage className="logo"/>
            </div>
            <h1>Contact Us</h1>
            <p>Just want to say hi? We&apos;d love to hear from you. We love our customers and community!</p>
            <a href="#contact">Send US A Message</a>
          </div>
          <div className="section__two">
            <div className="section__two--logo">
              <BiSupport className="logo"/>
            </div>
            <h1>Get Support</h1>
            <p>Have an issue with an order or with a product you purchased from us? Fill out our support form.</p>
            <a href="#">Contact Support</a>
          </div>
        </div>
      </div>
      <div className="contact__submit" id="contact">
        <div className="contact__submit--one">
          <div className="contact__head">
            <h1>Contact Us</h1>
          </div>
          <div className="contact__address">
            <p>Acme Outdoors</p>
            <p>123 Rainy Street</p>
            <p>Oklahoma City, OK 73129</p>
          </div>
          <div className="contact__inquiry">
            <span><b>General Inquiries:</b> (405) 555-5555</span>
            <span><b>Customer Support:</b> (405) 555-55556</span>
          </div>
        </div>
        <div className="contact__submit--two">
          <h1>Contact Form</h1>
          <p>Send us a message and we&apos;ll get back to you as soon as we can!</p>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Enter your name" required/>
            </div>
            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" placeholder="Enter your email address" required/>
            </div>
            <div className="message">
              <label htmlFor="message">Your Message</label>
              <textarea
                rows={4} 
                cols={40}
                name="message"
                id="message"
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
