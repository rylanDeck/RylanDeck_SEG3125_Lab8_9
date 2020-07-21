import React from 'react';
import { useHistory } from "react-router-dom";

import '../style/MainPage.css'


const MainPage = () => {

    const history = useHistory();

    const handleExhibits = () => {
        history.push("/Exhibits");
    }

    return (
        <div className = "backback">
            <br></br><br></br><br></br><br></br>
            <h1 type="app-header">Welcome! To Art with you's Virtual Museum!</h1>
            <br></br><br></br>
            <button class="favorite styled" type="Exhibits" onClick={handleExhibits}>Explore Exhibits</button>
        </div>
    )
}

export default MainPage
