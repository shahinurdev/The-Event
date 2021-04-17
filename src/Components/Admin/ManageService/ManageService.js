import React, { useEffect, useState } from 'react';
import Delete from '../Delete/Delete';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [manageService, setManageService] = useState([])

    useEffect(() => {
        fetch('https://agile-depths-84929.herokuapp.com/allService')
            .then(res => res.json())
            .then(data => {
                console.log('check data', data);
                setManageService(data)
            })
    }, [])
    return (
             <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

            <table class="table">
            {
                manageService.map(manage=><Delete manage={manage} key={manage._id}></Delete>)
            }
             </table>
            </div>
            </section>
    
    );
};

export default ManageService;