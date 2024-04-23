import './Servie.css'
import Woman from '../../assets/service-ofice.svg'
import LatestLeft from '../../assets/latest-left.svg'
import All from '../../assets/service_balll.svg'


const Service = () => {
  return (
    <div>
       <section className="about">
          <div className="container">
            <div className="about_box">
              <div className="about_text">
                <img src={All} alt="" />
                <h1>We serve clients with ground breaking solutions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                <span>Learn More <img src={LatestLeft} alt="" /></span>
              </div>
              <img src={Woman} alt="" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Service