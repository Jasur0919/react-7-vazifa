import './Product.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Woman from '../../assets/service-ofice.svg'
import LatestLeft from '../../assets/latest-left.svg'
import All from '../../assets/service_balll.svg'
// import Latest1 from '../../assets/latest-1.svg'
import { Link } from 'react-router-dom'



const API_URL = "https://dummyjson.com/products"

const Product = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(API_URL)
            .then(res => setData(res.data.products))
            .catch(arr => console.log(arr))
            .finally()
    }, [])
   
    
    let links = data?.slice(0, 9).map((pr) => (
        <div key={pr.id} className="latest_card">
            <Link to={`/products/${pr.id}`}>
                <img src={pr.images[0]} alt="" className='latest_card_img' />
            </Link>
               <div className="latest_card_text">
               <h3>{pr.title}</h3>
                <p>{pr.description}</p>
                <span>Learn More <img src={LatestLeft} alt="" /></span>
               </div>
              </div>

    ))


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

        {/* <section className="product">
            <div className="container">
                <div className="product_box">
                    <div className="product_card">

                    </div>
                </div>
            </div>
        </section> */}


<section className="latest">
        <div className="container">
          <h2 className='latest_h2'>Latest Product & News</h2>
          <div className="latest_box">
            {links}
              {/* <div className="latest_card">
                <img src={Latest1} alt="" />
               <div className="latest_card_text">
               <h3>Why you have to digitalize in 2021</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                <span>Learn More <img src={LatestLeft} alt="" /></span>
               </div>
              </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product