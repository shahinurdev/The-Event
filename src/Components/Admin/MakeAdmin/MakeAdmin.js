import React, {  useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [email,setEmail]=useState(null);
    const handleChange= e => {
        console.log(e.target.value);
        const newEmail = e.target.value;
        setEmail(newEmail)
    }
    
    const onSubmit = () => {
        fetch(' https://agile-depths-84929.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                alert('yes');
                console.log('email',data)
            });

    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <form action="" onSubmit={onSubmit} >
                <input onChange={handleChange} type="email" required name="email" id=""/>
                <button className='btn btn-primary'>Submit</button>

            </form>
               
            </div>
        </section>
    
    );
};

export default MakeAdmin;