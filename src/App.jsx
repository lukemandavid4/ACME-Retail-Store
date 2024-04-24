import {Routes, Route} from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Shop from "./components/shop/Shop"
import Donate from "./components/donate/Donate"
import Contact from "./components/contact/Contact"
import Header from "./components/header/Header"
import NavBar from "./components/navbar/NavBar"
import Announcement from "./components/announcement/Announcement"
import './App.css'
import Footer from "./components/footer/Footer"
import Cart from "./components/cart/Cart"
import { useState } from "react"
import Tent from "./components/products/Tent"
import Card from "./components/products/Card"
import Tumbler from "./components/products/Tumbler"
import BluePack from "./components/products/BluePack"
import GreenPack from "./components/products/GreenPack"

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const toggleCart = () =>{
    setIsCartOpen(!isCartOpen)
  }


  return (
    <div className="container">
        <Header />
        <NavBar toggleCart={toggleCart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/product/white-tent" element={<Tent />}/>
          <Route path="/product/gift-card" element={<Card />} />
          <Route path="/product/tin-coffee-tumbler" element={<Tumbler />} />
          <Route path="/product/blue-pack" element={<BluePack />} />
          <Route path="/product/green-pack" element={<GreenPack />} />
        </Routes>
        <Cart isOpen={isCartOpen} isClose={() => setIsCartOpen(isCartOpen === false)}/>
        <Footer />
    </div>
  )
}

export default App
