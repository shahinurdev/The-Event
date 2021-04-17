import React from 'react';
import mainHeader from '../../../images/mainHeader.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center container mb-3 ">
        <div className="col-md-4 offset-md-1">
            <h1 className="text-white" style={{color: '#3A4256'}}>Your New Event<br/> Starts Here</h1>
            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            <button className="btn btn-primary">GET EVENT</button>
        </div>
        <div className="col-md-6">
            <img style={{height:'500px'}} src={mainHeader} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default HeaderMain;