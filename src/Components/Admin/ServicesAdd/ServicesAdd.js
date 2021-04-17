import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const ServicesAdd = () => {
    const [serviceInfo,setServiceInfo]=useState({});
    const [file,setFile]=useState(null)

    const handleBlur = e => {
        const newInfo = { ...serviceInfo };
        newInfo[e.target.name] = e.target.value;
        setServiceInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    
    const handleSubmit = () => {
        const formData = new FormData()
        console.log(serviceInfo);
        formData.append('file', file);
        formData.append('title', serviceInfo.title);
        formData.append('description', serviceInfo.description);
        formData.append('price', serviceInfo.price);

        fetch('https://agile-depths-84929.herokuapp.com/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


 

    return (
        <section className="container-fluid row">
         <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Service</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
        
    )
}
   


export default ServicesAdd;