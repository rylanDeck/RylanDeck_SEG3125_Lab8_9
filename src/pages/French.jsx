import React from 'react';
import { useHistory } from "react-router-dom";

import '../style/MainPage.css'


const MainPageFR = () => {

    const history = useHistory();

    const handleExhibits = () => {
        history.push("/Exhibits");
    }

    return (
        <div>
            <br></br><br></br><br></br><br></br>
            <h1 type="app-header">Bienvenue! à l'art avec vous musée virtuel!</h1>
            <br></br><br></br>
            <button class="favorite styled" type="Exhibits" onClick={handleExhibits}>Explorer les expositions</button>
        </div>
    )
}

export default MainPageFR
