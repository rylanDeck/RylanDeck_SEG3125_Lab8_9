import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

import '../style/ExhibitSelection.css'


const ExhibitSelection = () => {

    const handleGuide = () => {

        var title = document.getElementById("TourT");
        var text = document.getElementById("TourP");

        var border = document.getElementById("bigDiv");
        border.style.display = "block";

        title.style.display = "block";
        text.style.display = "block";
    }
    const handleGuideTwo = () => {

        var title = document.getElementById("TourT");
        var text = document.getElementById("TourP");

        var border = document.getElementById("bigDiv");
        border.style.display = "none";

        title.style.display = "none";
        text.style.display = "none";
    }

    const handleOne = () => {
        var title = document.getElementById("OneT");
        var text = document.getElementById("OneP");

        var border = document.getElementById("bigDiv");
        border.style.display = "block";

        title.style.display = "block";
        text.style.display = "block";
    }
    const handleOneTwo = () => {
        var title = document.getElementById("OneT");
        var text = document.getElementById("OneP");

        var border = document.getElementById("bigDiv");
        border.style.display = "none";

        title.style.display = "none";
        text.style.display = "none";
    }

    const handleTwo = () => {
        var title = document.getElementById("TwoT");
        var text = document.getElementById("TwoP");

        var border = document.getElementById("bigDiv");
        border.style.display = "block";

        title.style.display = "block";
        text.style.display = "block";
    }
    const handleTwoTwo = () => {
        var title = document.getElementById("TwoT");
        var text = document.getElementById("TwoP");

        var border = document.getElementById("bigDiv");
        border.style.display = "none";

        title.style.display = "none";
        text.style.display = "none";
    }

    const handleThree = () => {
        var title = document.getElementById("ThreeT");
        var text = document.getElementById("ThreeP");

        var border = document.getElementById("bigDiv");
        border.style.display = "block";

        title.style.display = "block";
        text.style.display = "block";
    }
    const handleThreeTwo = () => {
        var title = document.getElementById("ThreeT");
        var text = document.getElementById("ThreeP");

        var border = document.getElementById("bigDiv");
        border.style.display = "none";

        title.style.display = "none";
        text.style.display = "none";
    }

    return (
        <div>
            <h1>Exhibit Selection: </h1>
            <div className="boxed">
                <Link className="link" to="/ExhibitOne" onMouseOver={handleGuide} onMouseOut={handleGuideTwo}>Guided Tour</Link>
                <br></br>
                <Link className="link" to="/ExhibitOne" onMouseOver={handleOne} onMouseOut={handleOneTwo}>Exhibit One</Link>
                <br></br>
                <Link className="link" to="/ExhibitTwo" onMouseOver={handleTwo} onMouseOut={handleTwoTwo}>Exhibit Two</Link>
                <br></br>
                <Link className="link" to="/ExhibitThree" onMouseOver={handleThree} onMouseOut={handleThreeTwo}>Exhibit Three</Link>
            </div>

            <div id='bigDiv' className="boxedDescrip" style={{ display: 'none' }}>
                <h2 id='TourT' style={{ display: 'none' }} >Guided Tour</h2>
                <p id='TourP' style={{ display: 'none' }}  >
                    The guided tour will bring you in one by one each of the exhibits, 
                    and will help you understand them, giving you slightly more context, and more backround information on wach of the authors.
                    <br></br><br></br>
                    This is recomended for first time users of the virtual Museum.
                </p>

                <h2 id='OneT' style={{ display: 'none' }} >Exhibit One - Scenery</h2>
                <p id='OneP' style={{ display: 'none' }}  > 
                    This exhibit showcases all types of scenery works in the form of pictures, paintings, and drawings.
                    <br></br><br></br>
                    This exhibit will allow you to peacefully reflect on the natural beauty the world has to offer, as well as apreciate the tallent
                    some artists have to encorporate that beauty in a paint brush.
                    <br></br><br></br>
                    Works include "river boat" by John Hathorn, "Sunset Sky sceen" by Maggie Rose, and others.
                </p>

                <h2 id='TwoT' style={{ display: 'none' }} >Exhibit Two - Portraits</h2>
                <p id='TwoP' style={{ display: 'none' }}  > 
                    This exhibit is all about portraits. Hand drawn, paintintgs, and stunning pictures.
                    <br></br><br></br>
                    This exhibit allows everyone to reflect on the natural beauty within humans, and how this beauty can be expressed and saved or 
                    shared to others on a page. 
                    <br></br><br></br>
                    Works include "Beauty Sketches" by Armahn Antillo, "Rose" by Jessica Nemesis, and others.
                </p>

                <h2 id='ThreeT' style={{ display: 'none' }} >Exhibit Three - Abstract</h2>
                <p id='ThreeP' style={{ display: 'none' }}  > 
                    This exhibit is all about the unknown, the untold, and even the unimaginable.
                    <br></br><br></br>
                    Somehow, these artists are able to put so many themes, so much meaning, into one picture. We reccomend using our 'Chat' functionality (bottom right)
                    to use in order to disscuss with others the meaning behind each painting.
                    <br></br><br></br>
                    Works include "Closed lines" by Baggy Pengy, "Ocean Flow" by Quianna Wingged, and others.
                </p>
            </div>
        </div>
    );

}

export default ExhibitSelection;
