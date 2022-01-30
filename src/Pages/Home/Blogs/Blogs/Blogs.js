import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const Blogs = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://vast-gorge-26267.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <>
        <div className="mt-5">
        
        <h1 className="text-center mb-5">New Suits Collection 2021</h1>
        
        
        <div className="px-5 row row-cols-1 row-cols-md-3 gy-3">
            {
                services.slice(0,6).map(service => <Services
                key={service._id}
                service={service}
                ></Services>)
            }
        </div>
        </div>
        </>
    );
};

export default Blogs;