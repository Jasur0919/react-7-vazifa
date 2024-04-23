import './App.css'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import Service from './pages/service/Service'
import About from './pages/about/About'
import {Link, Route, Routes} from "react-router-dom"
import Navbar from './assets/navbar.svg'
import Fensweet1 from './assets/footer-finsweet.svg'
import Site from './assets/footer-site.svg'




function App() {
  return (
    <>

    <section className="navbar">
      <div className="container">
        <div className="navbar-box header">
            <img src={Navbar} alt="" />
          <div className="navbar_links">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/service"}>Service</Link>
            <button>Clone project</button>
          </div>
        </div>
      </div>

    </section>
  
     <div className='navbar_routes'>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/service' element={<Service/>}/>
     </Routes>
     </div>


     <section className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_link">
            <img className='footer_img1' src={Fensweet1} alt="" />
            <h2>Bespoke software solutions</h2>
            <div className="footer_link_img">
              <img src={Site} alt="" />
            </div>
          </div>

          <div className="footer_link">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Carees</p>
            <p>Services</p>
            <p>Blog</p>
          </div>
          
          <div className="footer_link">
            <h3>Connect</h3>
            <p>hi@finsweet.com</p>
            <p>+(123) 456-7890</p>
          </div>

          <div className="footer_link">
            <h3>Join Newsletter</h3>
            <input type="text" placeholder=' Type email here' />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer_bot">
          <p>© All rights reserved – Finsweet</p>
          <span className='footer_bot-span'>Privacy Policy <p>Terms & Conditions</p></span>
        </div>
      </div>
     </section>


   
    </>
  )
}

export default App
