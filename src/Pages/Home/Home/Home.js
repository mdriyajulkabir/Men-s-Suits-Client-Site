import React from 'react';
import Footerr from '../../Footerr/Footerr';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs/Blogs';
import CustomerReview from '../CustomerReview/CustomerReview';
import Header from '../Header/Header';
import Story from '../Story/Story';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Blogs></Blogs>
            <Story></Story>
            <CustomerReview></CustomerReview>
            <Footerr></Footerr>
        </div>
    );
};

export default Home;