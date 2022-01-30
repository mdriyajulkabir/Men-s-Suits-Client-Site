import React, { useEffect, useState } from 'react';
import Footerr from '../../Footerr/Footerr';
import Header from '../../Home/Header/Header';
import OurService from '../OurService/OurService';

const OurServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://vast-gorge-26267.herokuapp.com/services')
            .then(result => result.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div className="mt-5">
                <h1 className="text-center">We Provide Most Proffesional Service
                    Since 2018</h1>
                <h1 className="text-center">HounLare Popular Services</h1>
                <p className="text-center mb-5">Why HounLare services is best all time since 1990. desires to obtain of itself, because it is pain, but because
                    occasionally circumstance procure him some great deals.</p>
                

                <div className="px-5 row row-cols-1 row-cols-md-3 gy-3">
                    {
                        services.map(service =><> <OurService
                            key={service._id}
                            service={service}
                        ></OurService>
                        </>)
                    }
                </div>
            </div>
            <Footerr></Footerr>
        </>
    );
};

export default OurServices;