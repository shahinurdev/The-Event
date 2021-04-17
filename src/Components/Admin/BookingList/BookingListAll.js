import React from 'react';


const BookingListAll = (props) => {
    const { title, description } = props.booking;

    return (
        
        <div class="card " style={{width:'18em'}}>
        <div class="card-body">
          <h5 class="card-title">{title} </h5>
          <p class="card-text">{description}</p>
      
        </div>
      </div>

    );
};

export default BookingListAll;