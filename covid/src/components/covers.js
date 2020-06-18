import React, { Component } from 'react';
import Fade from "react-reveal/Fade";
import {FaMedkit,FaBookDead} from "react-icons/fa";
import {FiAlertTriangle} from "react-icons/fi";
import cv from "../images/cv.jpg"
import caution from "../images/caution.jpg"
import help from "../images/help.jpg"
import {Link} from "react-router-dom"
import {GiConcentrationOrb} from "react-icons/gi";
class Cov extends Component {

    constructor()

    {
        super()
        this.state={
            pakdata:[]
        }
    }

    componentDidMount()
    {
        fetch("https://api.covid19api.com/summary")
            .then(resp => resp.json())
                .then(data => {
                    
                    console.log(data.Countries[126]);
                    this.setState({pakdata:data.Countries[126]})
                })
    }
    
    render(){
        let {pakdata}=this.state;
    return(
        <div className="controller">
        <div className="thecov">
            <Fade left><p className="mainp">Corona Virus</p></Fade>
            <Fade right><p className="subp">A tracker made for pakistan</p></Fade>
            <Fade bottom><button className="btn btn-success"><i>Explore</i></button></Fade>
        </div>
        <Fade left>
            <div className="orb">
                <GiConcentrationOrb className="rer"/>
                <p className="unite">Explore lastest news!</p>
            </div>
        </Fade>
        <div className="thecarousel">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={cv} class="d-block w-100" alt="..." height="600px"/>
      <Link to="/stats"><div class="carousel-caption d-none d-md-block">
        <Fade top><h1><b>Latest Cases</b></h1></Fade>
        <Fade bottom><h3>Discover all the stats regarding covid infecting the country</h3></Fade>
      </div></Link>
    </div>
    <div class="carousel-item">
      <img src={caution} class="d-block w-100" alt="..." height="600px"/>
      <Link to="/about"><div class="carousel-caption d-none d-md-block">
        <Fade top><h1><b>Precautions</b></h1></Fade>
        <Fade bottom><h3>Checkout all the symptoms and precautions provided by the government</h3></Fade>
      </div></Link>
    </div>
    <div class="carousel-item">
      <img src={help} class="d-block w-100" alt="..." height="600px"/>
      <Link to ="/help"><div class="carousel-caption d-none d-md-block">
        <Fade top><h1><b>Helpline</b></h1></Fade>
        <Fade bottom><h3>Showing any symptoms? consider calling helpline</h3></Fade>
      </div>
      </Link>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    
       {/*<div className="fixedcov">
        <div className="statdemo">
            <Fade left><p className="s">Stats</p></Fade>
            
            <Fade bottom><div className="coronacount">
                <div className="top">
                 <p>Total Corona Cases : {pakdata.TotalConfirmed} {}</p>
                 </div>
                 <div className="bottom">
                     <div className="leftportion">
                    <div className="fame">
                    <FaMedkit className="cw1"/>
                     <p className="lk">Total Recovered : {pakdata.TotalRecovered}</p>
                     </div>
                     <div className="fame famespec">
                     <FiAlertTriangle className="cw2"/>
                     <p className="lj"> Active Cases : {parseInt((pakdata.TotalConfirmed)-(pakdata.TotalRecovered)-(pakdata.TotalDeaths))}</p>
                     </div>
                     <div className="fame famesup">
                         <FaBookDead className="cw3"/>
                    <p className="lp">Total Fatalities : {pakdata.TotalDeaths}</p>
                     </div>
                     </div>
                     <div className="rightportion">
                         <p>Graph</p>
                     </div>
                 </div>
                 <div className="contactdemo">
                     <div className="btn btn-danger">More Details</div>
                 </div>
            </div></Fade>
        </div>
    </div>*/ } 
        
 </div>
    )
    }
}
export default Cov;