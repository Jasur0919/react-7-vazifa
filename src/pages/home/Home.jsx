// import { Link } from "react-router-dom"
import './Home.css'
import Logo from '../../assets/logo-text-img.svg'
import Man from '../../assets/logo-img.svg'
import Latest1 from '../../assets/latest-1.svg'
import Latest2 from '../../assets/latest-2.svg'
import Latest3 from '../../assets/latest-3.svg'
import LatestLeft from '../../assets/latest-left.svg'

const Home = () => {
  return (
    <div>
      <section className="logo">
        <div className="container">
          <div className="logo_box">
            <div className="logo_text">
              <h1>Prosper with our bespoke solutions</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
              <div className="logo_text-button">
                <button>See our services</button>
                <p>See All Services </p>
              </div>
              <p className='logo_par1'>Worked with 100+ Companies</p>

              <img src={Logo} alt="" />
              
            </div>
            <div className="logo_img">
              <img className='logo_img-1' src={Man} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="latest">
        <div className="container">
          <h2>Latest Blog & News</h2>
          <div className="latest_box">
              <div className="latest_card">
                <img src={Latest1} alt="" />
               <div className="latest_card_text">
               <h3>Why you have to digitalize in 2021</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                <span>Learn More <img src={LatestLeft} alt="" /></span>
               </div>
              </div>

              <div className="latest_card">
                <img src={Latest2} alt="" />
               <div className="latest_card_text">
               <h3>Our internal process and longerm vision</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                <span>Learn More <img src={LatestLeft} alt="" /></span>
               </div>
              </div>
              <div className="latest_card">
                <img  src={Latest3} alt="" />
               <div className="latest_card_text">
               <h3>Helping the next generation of leaders</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                <span>Learn More <img src={LatestLeft} alt="" /></span>
               </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home