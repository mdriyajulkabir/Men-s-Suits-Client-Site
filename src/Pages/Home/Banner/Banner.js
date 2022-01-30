import React from 'react';
import { Link } from 'react-router-dom';
// import banner from '../../../Images/';
import './Banner.css';
const Banner = () => {
    return (
        <>
        <div className="main-image">
            <div className="containers">
                <h4><span className='fs-3'>Men's</span></h4>
                <h1><span className='cen'> Suits.</span></h1>
                <span className='cen2'>Designed by nani marquina</span> 
                
                
                <Link className='button' to='/aboutus'>About Us</Link>
            </div>
        </div>
        <div className='container my-5'>
            <h1 className='discover-1'>There is no mystery about a <span style={{color: "#cba100"}}> Limonta.</span></h1>
            <div className="row mt-4 ">
                <div className="col-md-9 col-sm-12">
                    <p>Simply more than two centuries of craftsmanship and a perpetual commitment to perfection. There is no mystery about a Suit Me, simply more than two centuries of craftsmanship and a perpetual commitment to perfection.
                    </p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <button className='discover-btn'>DISCOVER</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Banner;