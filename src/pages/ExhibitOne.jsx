import React from 'react';
import { Link, useHistory } from "react-router-dom";

import '../style/ExhibitScreen.css';
import PicOne from '../images/pic1.jpg';
import PicTwo from '../images/pic2.jpg';
import PicThree from '../images/pic3.jpg';

const ExhibitOne = () => {

    const history = useHistory();

    const handleNext = () => {
        history.push("/ExhibitTwo");
    }

    return (
        <div>
            <h1 type="app-header">Exhibit One - Scenery:</h1>

            <div className="row">
                <div className="column">

                    <img src={PicOne} alt="Hanz Franz" width="500" height="333" />
                    <br></br> <br></br>
                    <img src={PicOne} alt="Hanz Franz" width="200" height="133" />
                    &nbsp; &nbsp;
                    <img src={PicTwo} alt="Almtec Lococ" width="200" height="133" />
                    &nbsp; &nbsp;
                    <img src={PicThree} alt="Patric Square" width="200" height="133" />
                </div>
                <div className="column">
                    <h2>Boat Tour - by Henry Greyford</h2>
                    <p className="ExhibDesc">
                        This work is one of the famous Henry Greyford. Apeased by the loucious bneauty of south
                        Decamara, Henry started painting this picture by hand. Not completing it in time, he finished 
                        the image by memeory later that year after returning.
                        <br></br> <br></br>
                        Henry Greyford 2006.
                    </p>

                </div>
            </div>

            <div className="left">
                <br></br>
                <br></br>
                <button className="styled" onClick={handleNext}>Exhibit Two - Portaits</button>
            </div>

        </div>
    )
}

export default ExhibitOne