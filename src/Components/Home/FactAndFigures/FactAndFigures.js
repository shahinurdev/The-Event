import React from 'react';
import '../FactAndFigures/FactAndFigures.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee,faUserCircle } from '@fortawesome/free-solid-svg-icons'
import talkingPeoples from '../../../images/talking.png'
import read from '../../../images/read.jpg';
import sponsor from '../../../images/sponsor.jpg';
import world from '../../../images/world.jpg';


const FactAndFigures = () => {
    
    return (
        <section className="pt-5">
        <div class="container " style={{height:'500px'}}>
        <div class="row">
            <br/>
           <div class="col text-center ">
            <h2>Facts & Figures About The Event</h2>
            </div>
        </div>
            <div class="row text-center pt-4">
                <div class="col-md-3 ">
                <div class="counter">
                <img  src={talkingPeoples } alt=""/>
          <h2 class="timer count-title " >45</h2>
           <p class="count-text ">Speaker</p>
        </div>
                </div>
                  <div class="col-md-3 ">
                   <div class="counter">
                   <img src={read } alt=""/>
          <h2 class="timer count-title ">40</h2>
          <p class="count-text ">Topics</p>
        </div>
                  </div>
                  <div class="col-md-3 ">
                      <div class="counter">

                      <img src={sponsor} alt=""/>
          <h2 class="timer count-title ">150</h2>
          <p class="count-text ">Sponsor</p>
        </div></div>
                  <div class="col-md-3 ">
                  <div class="counter">
                  <img src={ world } alt=""/>
          <h2 class="timer count-title">15</h2>
          <p class="count-text ">Countries</p>
        </div>
                  </div>
                  <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta laudantium rem tempore. Sit, nisi quae, ipsam, voluptates laboriosam mollitia iste delectus labore autem officiis cum excepturi! Eligendi maxime sequi temporibus architecto incidunt sit. Quibusdam sunt repellat minima aut maiores.</p>
             </div>
    </div>
    </section>

    );
};

export default FactAndFigures;