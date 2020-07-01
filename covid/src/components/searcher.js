import React, { Component } from 'react';

var Searcher = () => {
    return(

        <div className="searched">
            <input type="text" placeholder="country" className="form-control"/>
            <button className="btn btn-outline-success">Search</button>
        </div>
    )
}

export default Searcher;