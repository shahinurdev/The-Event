import React, {  useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';


const Review = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [review,setReview]=useState({});
    const handleBlur= e => {
        console.log(e.target.value);
        const newReview ={...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    const onSubmit = () => {
        const submitReview = {...loggedInUser,review:{review}}
        fetch('https://agile-depths-84929.herokuapp.com/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({submitReview })
        })
            .then(res => res.json())
            .then(data => {
                alert('Review');
               console.log('review',data);
            });

    }
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
        <form action="" onSubmit={onSubmit} >
            <input onBlur={handleBlur} type="text" required name='name' id=""/>
            <input onBlur={handleBlur} type="text" required name='company' id=""/>
            <input onBlur={handleBlur} type="text" required name='description' id=""/>
            <button className='btn btn-primary'>Submit</button>

        </form>
           
        </div>
    </section>
    );
};

export default Review;