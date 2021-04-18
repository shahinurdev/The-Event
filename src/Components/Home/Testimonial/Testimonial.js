import React from 'react';

const Testimonial = (props) => {
    const {name,email,description,company
    } = props.testimonial.submitReview;
    return (
        <div className='col-md-4 mb-2'>
        <div className="card shadow-sm ">
            <div className="card-body">
                <p className="card-text text-center">Name: {name}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                
                <div>
                    <h6 className="text-primary">Email: {email}</h6>
                    <p className="m-0">Company: {company}</p>
                    <p>Comments: {description}</p>
                </div>
            </div>
            </div>
       </div>
    );
};

export default Testimonial;