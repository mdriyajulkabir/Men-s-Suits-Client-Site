import React from 'react';
import Header from '../Home/Header/Header';
import error from '../../Images/404.webp';
import Footerr from '../Footerr/Footerr';

const Error = () => {
    return (
        <div>
            <Header></Header>
            <img src={error} className='ms-5 ps-5 w-50 d-flex justify-content-center ' alt="" />
            <Footerr></Footerr>
        </div>
    );
};

export default Error;