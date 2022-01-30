import React from 'react';
import './Footer.css'


const Footerr = () => {
    return (
        <div className='row my-5 mx-auto ps-5 pe-5 pt-5 text-white footer-container'>
            <div className='col-lg-3 col-sm-6'>
            <h3>Mens's Suits</h3>
                <h3><a href="https://www.facebook.com/riyajulkabir797/"><i class="fab fa-facebook"></i></a></h3>
                <h3><a href="https://www.instagram.com/riyajul_kabir/?fbclid=IwAR26BlBnO71kMaOoMiTgDtrkcJZ6GMN3lL-W18sMCLlbX-3qnystiwyHjPA"><i class="fab fa-instagram-square"></i></a></h3>
                <h3><i class="fab fa-twitter"></i></h3>
                <h3><a href="https://github.com/mdriyajulkabir"><i class="fab fa-github-alt"></i></a></h3>
                <h3><a href="https://www.linkedin.com/in/riyajul-kabir-rk797/"> <i class="fab fa-staylinked"></i></a></h3>

            </div>
            <div className='col-lg-3 col-sm-6'>
                <h2>More About</h2>
                <p>Our Gellary</p>
                <p>Maximum Hour Service</p>
                <p>Free Return Policy</p>
                <p>Free Delivery</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <h2>Helpful Links</h2>
                <p>Who We Are</p>
                <p>Our Team Mission History</p>
                <p>Awards since 1990 - 2020</p>
                <p>Success Story </p>
                <p>specialized Support</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <h2>Terms & Policies</h2>
                <p>Policies</p>
                <p>Terms of Use</p>
                <p>Code Of Conduct</p>
                <p>Privacy</p>
            </div>
        </div>
    );
};

export default Footerr;