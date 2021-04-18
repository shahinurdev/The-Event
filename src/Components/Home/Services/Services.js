import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const {title,description,image,price,_id}=props.service
    return (
        
        <div className="col-md-3 border rounded p-3 mr-2 text-center">
        <img style={{width:'150px'}} className="p-2 rounded mx-auto d-block" src={`data:image/png;base64,${image.img}`} alt=""/>

            <h3 className="text-center" >{title}</h3>
            <p className="text-center">{description}</p>
            <p className="text-center">Price: ${price}</p>
            <button className="btn text-center"><Link to={"/book/"+_id}>Book Now</Link></button>

    </div>
    
    );
};

export default Services;