import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Stripe from '../Payment/Stripe';
import Sidebar from '../Sidebar/Sidebar';

const Book = () => {
    const [loggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [bookService, setBookService] = useState([]);
   
    useEffect(() => {
        fetch('https://agile-depths-84929.herokuapp.com/Allbook/'+id)
            .then(res => res.json())
            .then(data => {
                console.log('check book data', data);
                setBookService(data)
            })
    }, [id]);
    const handleSubmit = () =>{
        const orderDetails = {...loggedInUser,title:bookService.title,description:bookService.description,price:bookService.price,orderTime:new Date()}
    
    fetch('https://agile-depths-84929.herokuapp.com/addOrder',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(orderDetails)
  
      })
      .then(res=>res.json())
      .then(data =>{
        if(data){
          alert('Order Successfully Done')
        }
      })


}
    return (

        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Book</h5>
                <h3 className="border bg-light p-2 w-50">Name: {loggedInUser.name}</h3>
                <h3 className="border bg-light p-2 w-50">Email: {loggedInUser.email}</h3>
                <h3 className="border bg-light p-2 w-50">Booking Event:
              {bookService.title}</h3>
                <h3 className="border bg-light p-2 w-50">Booking Event:
              {bookService.price}</h3>
              <Stripe handleSubmit={handleSubmit}></Stripe>
            </div>

        </section>
    );
};

export default Book;