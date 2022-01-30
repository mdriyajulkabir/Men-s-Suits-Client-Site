import React from 'react';
import { Link } from 'react-router-dom';
import './services.css'

const Services = ({service}) => {
    const {_id,name, description, size, img,price,rating} = service;
    
    return (
        <div>
            
  <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top img-fluid " alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}.</p>
        <div className='d-flex justify-content-between'>
        <p>Ratings: {rating}</p>
        <p><i class="fas fa-dollar-sign"></i> {price}  </p>

        </div>
        <p>Size :{size} </p>
        
        
        
        </div>
        <div  className='row d-flex justify-content-between'>
          <div className="col-lg-6 col-md-6 col-sm-12 px-5 mb-3">
          <div className='detail-btn'>
          <Link className='details d-flex align-items-center justify-content-center rounded-pill py-3 ' style={{ textDecoration:'none'}} to={`/details/${_id}`}>Details</Link>
          </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-5 mb-3">
          <div className='detail-btn'>
          <Link className='details d-flex align-items-center justify-content-center rounded-pill py-3 ' style={{ textDecoration:'none'}} to={`/purchase/${_id}`}>Buy Now</Link>
          </div>
          </div>
        
      </div>
    </div>
  
</div>
        </div>
    );
};

export default Services;