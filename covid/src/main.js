import React, { Component } from 'react';
import Head from "./components/headers";
import Cov from "./components/covers";
import {Link,Route,Switch} from "react-router-dom";
import Footed from "./components/foot";
import About from "./components/about";
import Stat from "./components/stats";
import {Bar} from "react-chartjs-2";
import ScrollToTop from "./scrolltotop"

class Main extends Component {
    constructor(){
        super()
        this.state={
            keyval:"green"
        }
    }
    
    switched = () => {
        this.setState({keyval:"red"})
    }
    normalize = () => {
        this.setState({keyval:"green"})
    }
    render() { 
        return ( <div className="mainpage">
                    <Head colorswitch={this.state.keyval} signal={this.switched} antisignal={this.normalize}/>
                    <ScrollToTop />
                        <Route path="/" exact render={()=><Cov />} />
                        <Route path="/about" exact render={()=><About />} />
                        <Route path="/stats" exact render={()=><Stat />} />
                    <Footed />
                 </div> );
    }
}
 
export default Main;