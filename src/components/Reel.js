import React from 'react';
import './Reel.css';

function Reel(props) {
    return(
        <div>
            <img src={props.imageSrc} alt="News" />
            <h3>{props.newsTitle}</h3>
        </div>
    )
}

export default Reel;