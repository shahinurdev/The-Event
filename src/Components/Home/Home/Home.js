import React from 'react';
import FactAndFigures from '../FactAndFigures/FactAndFigures';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import Overveiw from '../Overveiw/Overveiw';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Overveiw></Overveiw>
            <FactAndFigures></FactAndFigures>
            <OurServices></OurServices>
            <Testimonials></Testimonials>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;