import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import '../Testimonials/Testimonials.css'




const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect( () => {
        fetch('https://agile-depths-84929.herokuapp.com/testimonials')
        .then(res => res.json())
        .then(data => {
            setTestimonials(data)
            console.log(data);
        })
    }, [])
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className="text-primary text-uppercase">Testimonial</h5>
                <h1>All Reviews <br/>People says</h1>
            </div>
            <div className="card-deck mt-5 row">
                 {
                     testimonials.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonials;