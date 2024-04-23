 import './Contact.css'
 import Woman from '../../assets/contact-woman.svg'
 import Latest1 from '../../assets/latest-1.svg'
 import Latest2 from '../../assets/latest-2.svg'
 import Latest3 from '../../assets/latest-3.svg'
 import LatestLeft from '../../assets/latest-left.svg'

const Contact = () => {
  return (
    <div>
       <section className="about">
          <div className="container">
            <div className="about_box">
              <div className="about_text">
                <h1>We serve clients with ground breaking solutions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                <button>Work With Us</button>
              </div>
              <img src={Woman} alt="" />
            </div>
          </div>
        </section>

        <section className="latest">
        <div className="container">
          <h2 className='latest_h2'>Latest Blog & News</h2>
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

export default Contact