import React from 'react';
import overveiw from '../../../images/overveiw.jpg'

const Overveiw = () => {
    return (
        <section className='container mt-5'>
           

            <div className="row">
                <div className="col-md-5">
                    <h3>OVERVEIW OF THE EVENT</h3>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, numquam!</small></p>
                    <br/><br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, voluptatibus. Quod nemo et dolore voluptate deserunt natus, id exercitationem ducimus amet perspiciatis reprehenderit, vero quidem dolorum labore earum? Consectetur sint distinctio voluptatibus dolores libero fuga magnam deserunt eveniet voluptates, praesentium cum consequatur aut debitis ducimus consequuntur sequi magni rerum culpa. Labore perspiciatis esse a unde cumque eum omnis tenetur incidunt. Praesentium hic consequuntur vel est iure magni commodi, corrupti dicta perferendis consectetur culpa unde atque autem assumenda animi qui dolores.</p>
                </div>
                <div className="col-md-5">
                    <img className="rounded" src={overveiw} alt=""/>

                </div>
            </div>
           
        </section>
    );
};

export default Overveiw;