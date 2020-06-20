import React, { Component } from 'react';

var Loading = () => {
    return(
        <div className="blackout">
            <div class="spinner-border text-light" role="status">
             <span class="sr-only">Loading...</span>
            </div>
            <p>Loading</p>
        </div>

    )
}
export default Loading ;