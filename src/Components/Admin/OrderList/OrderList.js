import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderListAll from './OrderListAll';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    console.log(orderList);

    useEffect(() => {
        fetch('https://agile-depths-84929.herokuapp.com/bookingList')
            .then(res => res.json())
            .then(data => {
                setOrderList(data)
        
            })
    }, [])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Event Name</th>
                        </tr>
                    </thead>
                    {
            orderList.map(order=><OrderListAll order={order} key={order._id}></OrderListAll>)
            }
            </table>
           
            </div>
        </section>
    );
};

export default OrderList;