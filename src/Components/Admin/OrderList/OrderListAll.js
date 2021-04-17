import React from 'react';

const OrderListAll = (props) => {
    const{name,email,title}=props.order;
    return (
       
  
  <tbody>
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{title}</td>
    </tr>
    
  </tbody>

    );
};

export default OrderListAll;