import React from 'react';
import './Heading.css';

function Heading(props) {
    return(
        <span className="wrapper">
            <h2>{props.headingTitle}</h2>
            <span className="line"></span>
            <h4>See More</h4>
        </span>
    )
}

export default Heading;