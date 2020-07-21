import React from 'react';
import { Link, useHistory } from "react-router-dom";

import '../style/ExhibitScreen.css';
import PicOne from '../images/pic4.jpg';
import PicTwo from '../images/pic5.jpg';
import PicThree from '../images/pic6.jpg';
import PicTen from '../images/pic10.jpg'

const ExhibitTwo = () => {

    const history = useHistory();

    const handleNext = () => {
        history.push("/ExhibitThree");
    }

    return(
        <div>
            <h1 type="app-header">Exhibit Two - Portraits:</h1>

            <div className="row">
                <div className="column">

                    <img src={PicThree} alt="Hanz Franz" width="350" height="500" />
                    <br></br> <br></br>
                    <img src={PicOne} alt="Hanz Franz" width="180" height="230" />
                    &nbsp; &nbsp;
                    <img src={PicTwo} alt="Almtec Lococ" width="180" height="230" />
                    &nbsp; &nbsp;
                    <img src={PicThree} alt="Patric Square" width="180" height="230" />
                </div>
                <div className="column">
                    <h2>La vie en Rose - by Almtec Loco</h2>
                    <p className="ExhibDesc">
                        This work was inspired by Almtec Loco's late mother Roxanne. This is supose to be her depiction in her 
                        20's. This artists work is heavily inspired by his mother. and not long after her passing (June of
                        2014) he made this work in her memory. Using an old image of Roxanne, Almtec crerated this beautiful piece.
                        <br></br> <br></br>
                        Almtec Loco 2015.
                    </p>

                </div>
            </div>

            <div className="left">
                <br></br>
                <br></br>
                <button className="styled" onClick={handleNext}>Exhibit Three - Abstract</button>
            </div>

        </div>
    )
}

export default ExhibitTwo