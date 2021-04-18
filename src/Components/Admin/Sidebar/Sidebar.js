import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers,faTasks } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://agile-depths-84929.herokuapp.com/isAdmin')
        .then(res => res.json())
        .then(data =>setIsAdmin(data))
    },[])
    


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh",overflow: "hidden"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

                    <li>
                        <Link to="/book/id" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Book</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>BookingList</span>
                        </Link>
                    </li>
                   {isAdmin && <div>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>OrderList</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicesAdd" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    </div>}
                
            </ul>
            
        </div>
    );
};

export default Sidebar;
