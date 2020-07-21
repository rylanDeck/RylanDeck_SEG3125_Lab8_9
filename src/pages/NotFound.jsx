import React from 'react';
import { useHistory } from "react-router-dom";

const NotFound = () => {

    const history = useHistory();

    const handleHome = () => {
        history.push("/");
    }

    return(
        <div>
            <h2>404 Page Not Found</h2>
            <small>Error Page</small>
            <br></br>
            <button class="favorite styled" type="Exhibits" onClick={handleHome}>Go back Home</button>
        </div>
    )
}

export default NotFound