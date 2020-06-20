import React, { Component } from 'react';
import { FaSkull } from "react-icons/fa";
import {Link} from "react-router-dom";

var Head = ({colorswitch,signal,antisignal}) => {
    return(
        <div className={colorswitch==="green" ? `header`:`headerred`}>
            <div className="leftsided">
                <FaSkull className="adjust"/>
                <p><Link onClick={antisignal} className={colorswitch==="green" ? `maindefault`:`maindefaultred`} to ="/">PakCovid</Link></p>
            </div>
            <div className="rightsided">
                <p onClick={antisignal}><Link className={colorswitch==="green" ? `default`:`reded`} to ="/about">Info</Link></p>
                <p onClick={signal}><Link className={colorswitch==="green" ? `default`:`reded`} to ="/stats">Stats</Link></p>
                <p onClick={antisignal}><Link className={colorswitch==="green" ? `default`:`reded`} to="/help">Help</Link></p>
            </div>
        </div>
    )
}
export default Head;