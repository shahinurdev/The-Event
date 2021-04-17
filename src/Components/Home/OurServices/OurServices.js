import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

    


const OurServices = () => {
  const [allService, setallService] = useState([])
    useEffect( () => {
        fetch('https://agile-depths-84929.herokuapp.com/allService')
        .then(res => res.json())
        .then(data => {
        
          setallService(data)
        })
    }, [])
    return (
        <section className="p-5">
            <div className="container">
                <h3>OUR MAIN SERVICES</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, omnis.</p>
                <div className="row">
                    {
                        allService.map(service=><Services service={service} key={service._id}></Services>)
                    }
                </div>
                </div>
         
        </section>
    );
};

export default OurServices;