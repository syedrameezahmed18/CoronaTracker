import React, { Component } from 'react';
import Head from "./components/headers";
import Cov from "./components/covers";
import {Link,Route,Switch} from "react-router-dom";
import Footed from "./components/foot";
import About from "./components/about";

class Main extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }
    
    render() { 
        return ( <div className="mainpage">
                    <Head />
                    
                    <Route path="/" exact render={()=><Cov />} />
                    <Route path="/about" exact render={()=><About />} />
                    <Route path="/stats" exact render={()=><Cov />} />
                    
                    <Footed />
                 </div> );
    }
}
 
export default Main;