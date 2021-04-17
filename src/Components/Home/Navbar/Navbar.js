import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <section className="container text-white">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link class="navbar-brand text-white" to="/home">The Event</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active ">
                   
                    <Link className="nav-link mr-5 text-white" to="/home" id="home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to='/about'>About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white" to='/projects'>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white " to='/contact'>Contact Us</Link>
                </li>
               
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white " to='/admin'>Admin</Link>
                </li>
               
                <li className="nav-item">
                    <Link className="nav-link mr-5 text-white " to='/login'>Login</Link>
                </li>
               
            </ul>
        </div>
    </nav>
    </section>
    );
};

export default Navbar;