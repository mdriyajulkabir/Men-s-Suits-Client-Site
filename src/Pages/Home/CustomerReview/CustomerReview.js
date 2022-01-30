import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect( ()=>{
        const uri=`https://vast-gorge-26267.herokuapp.com/review`
        fetch(uri)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
            console.log(data) 
        })
    },[])
    return (
        
            <div>
            <div className="text-center p-3 fw-fold mt-4">
                
                <h1><span style={{fontWeight:'bold',color:'rgb(234 142 112)'}}>O</span>ur Happy Client Says</h1>
                <p>SEE OUR CUSTOMER REVIEW <br /> STAY WITH US <br /><span style={{color:'rgb(234, 142, 112)', fontWeight:'bold'}}>THANKS <br />🤎</span></p>
            </div>
            <div className="row  row-cols-1 row-cols-md-3 p-5 gy-4 text-center" >
            {
                reviews.map(dt =>
                    <div key={dt._id}>
                      <div className="col services-card">
                        <div className="card ser-card h-100">
                        <div style={{textAlign:"center"}}><img className="card-img-top w-75" style={{height:'200px'}} src={dt.img}alt="" /></div>
                             <div className="card-body">
                             <h5 style={{color:'rgb(20, 51, 42)'}} className="card-title fw-bold">{dt.name}</h5>
                             <h6 style={{color:'rgb(20, 51, 42)'}} className="card-title fw-bold">Profession: {dt.work}</h6>
                             <p className="card-text fw-bold"><small>{dt.review}</small></p>
                             <p className="card-text fw-bold"><small>
                                 <Rating 
                                  readonly
                                  style={{ color: "goldenrod" }}
                                  initialRating={dt.rating}
                                  emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                  fullSymbol={<FontAwesomeIcon icon={fullStar} />} 
                                 />
                                 </small></p>
                            </div>
                        </div>
                      </div>
                    </div>
                    )
            }
        </div>
        </div>
       
    );
};

export default CustomerReview;