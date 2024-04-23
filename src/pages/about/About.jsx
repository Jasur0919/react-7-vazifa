import './About.css'
import Woman from '../../assets/about-woman.svg'


const About = () => {
  return (
    <div>
        <section className="about">
          <div className="container">
            <div className="about_box">
              <div className="about_text">
                <h1>We value human, organizational, and operational intelligence, not just artificial</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                <button>Work With Us</button>
              </div>
              <img src={Woman} alt="" />
            </div>
          </div>
        </section>

        <div className="inter">
          <div className="container">
            <div className="inter_box">
              <h3>The energy of a start-up combined with 30 years of experience</h3>
              <p className='inter_par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="container">
            <div className="info_box">
              <div className="info_card">
                <h1>15+</h1>
                <h3>Awards received</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
                  
                </p>
              </div>

              <div className="info_card">
                <h1>500+</h1>
                <h3>Clients served</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.
                </p>
              </div>

              <div className="info_card">
                <h1>30</h1>
                <h3>Employees</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.

                </p>
              </div>
              <div className="info_card">
                <h1>130+</h1>
                <h3>Custom solutions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.

                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About