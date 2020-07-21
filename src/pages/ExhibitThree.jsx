import React from 'react';
import { useHistory } from "react-router-dom";

import '../style/ExhibitScreen.css';
import PicOne from '../images/pic7.jpg';
import PicTwo from '../images/pic8.jpg';
import PicThree from '../images/pic9.jpg';

const ExhibitThree = () => {

    const history = useHistory();

    const handleNext = () => {
        history.push("/Exhibits");
    }

    return(
        <div>
            <h1 type="app-header">Exhibit Three - Abstract:</h1>

            <div className="row">
                <div className="column">

                    <img src={PicThree} alt="Hanz Franz" width="500" height="333" />
                    <br></br> <br></br>
                    <img src={PicOne} alt="Hanz Franz" width="200" height="133" />
                    &nbsp; &nbsp;
                    <img src={PicTwo} alt="Almtec Lococ" width="200" height="133" />
                    &nbsp; &nbsp;
                    <img src={PicThree} alt="Patric Square" width="200" height="133" />
                </div>
                <div className="column">
                    <h2>Rough Waters - by Jesica Nemisis</h2>
                    <p className="ExhibDesc">
                        Rough Waters is supose to illustrate the feeling many people have expereanced in their lives. Hoplessness, 
                        uncertainty, fear, the list goes on. Thid wokr crafted by the magnificent Jesica Nemis is 
                        her feeling towards the current state of the work in 2020. As with everything going on we are all 
                        probably feeling these 'rough waters'. 
                        <br></br> <br></br>
                        Jesica Nemisis 2020.
                    </p>

                </div>
            </div>
            <div className="left">
                <br></br>
                <br></br>
                <button className="styled" onClick={handleNext}>Back to Exhibits</button>
            </div>

        </div>
    )
}

export default ExhibitThree