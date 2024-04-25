import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom"
import Image from '../../assets/blog-home.svg'


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
    
    
   

  return (
    <div>
        <div className="container">
            {/* <div className="single_cards">
                <div className="single_image">
                    <img src={Image} alt="" />
                </div>
            </div> */}

{
        path?.images?.map((e, inx) => (
            <div key={inx} className="l">
                <img  src={e} alt="" />   
            </div>
        ))
    }
        </div>
        

        
       
    </div>
  )
}

export default SingleRout