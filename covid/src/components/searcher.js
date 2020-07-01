import React, { Component } from 'react';

var Searcher = ({eventval}) => {
    return(

        <div className="searched">
            <input type="text" placeholder="country" className="form-control" onChange={eventval}/>
            <button className="btn btn-outline-success">Search</button>
        </div>
    )
}

export default Searcher;