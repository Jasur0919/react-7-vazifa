import axios from "axios";
import './SingleRout.css'
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom"
// import Image from '../../assets/blog-home.svg'


const SingleRout = () => {
    const {id} = useParams()

const [path, setPath] = useState(null)
    
    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then(res => setPath(res.data))
            .catch(err => console.log(err))
    }, [id])
    console.log(path);
    
    
//    let link = path?.slice(0, 3).map((element, index) => (
//     <div key={index} className="single_image_appearances">
//                    <img  src={element.images} alt="" />
//                    <img  src={element.images} alt="" />
//                    <img  src={element.images} alt="" />
//     </div>
//    ))

  return (
    
    <div>
        
        <div className="container">
            <div className="single_cards">

                <div className="single_image_appearances">

                    {
                        path?.images?.slice(0, 3).map((element, index) => (
                            <div key={index} className="ll">
                                        <img  src={element} />
                            </div>
                        ))
                    }
                </div>

                {/* {link} */}
                {/* <div className="single_image_appearances">
                 
                </div> */}

                <div className="single_image">
                  
                         <img  src={path.images[0]} alt="" />   
                     </div>

            </div> 



        </div>
        


        
       
    </div>
  )
}

export default SingleRout