import React from 'react';

const Delete = (props) => {
    const{title,price,_id}=props.manage;
    const deleteService=(id)=>{
        fetch(`https://agile-depths-84929.herokuapp.com/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
               }
        })
        .then(res=> res.json())
        .then(data=>{
             console.log(data)
        })

    }
    return (
        <tbody>
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td> <button className='btn btn-danger' onClick={() =>deleteService(_id)}>Delete</button></td>
    </tr>
    
  </tbody>
       
    
    );
};

export default Delete;