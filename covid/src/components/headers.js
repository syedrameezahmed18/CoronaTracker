import React, { Component } from 'react';
import { FaSkull } from "react-icons/fa";
import {Link} from "react-router-dom";

var Head = () => {
    return(
        <div className="header">
            <div className="leftsided">
                <FaSkull className="adjust"/>
                <p><Link to ="/">PakCovid</Link></p>
            </div>
            <div className="rightsided">
                <p><Link to ="/about">Info</Link></p>
                <p><Link to ="/stats">Stats</Link></p>
                <p><Link to="/help">Help</Link></p>
            </div>
        </div>
    )
}
export default Head;