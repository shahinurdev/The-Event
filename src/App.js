import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Book from './Components/Admin/Book/Book';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin/Admin';
import ServicesAdd from './Components/Admin/ServicesAdd/ServicesAdd';
import BookingList from './Components/Admin/BookingList/BookingList';
import OrderList from './Components/Admin/OrderList/OrderList';
import ManageService from './Components/Admin/ManageService/ManageService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import Review from './Components/Admin/Review/Review';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute >
          <Route path="/servicesAdd">
            <ServicesAdd></ServicesAdd>
          </Route >
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route >
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route >
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/review">
           <Review></Review>
          </Route>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
