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
            <h1 type="app-header">August 28, 2021</h1>
            <br></br>
            <h2>Gowganda ON </h2>
        </div>
    )
}

export default MainPage
