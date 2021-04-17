import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BookingListAll from './BookingListAll';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([])

    useEffect(() => {
        fetch('https://agile-depths-84929.herokuapp.com/bookingList')
            .then(res => res.json())
            .then(data => {
                setBookingList(data)
            })
    }, [])
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            {
             bookingList.map(booking=><BookingListAll booking={booking} key={booking._id}></BookingListAll>)
            }
            </div>
        </section>
    );
};
export default BookingList;