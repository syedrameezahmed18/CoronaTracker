import React, { Component } from 'react';
import Roll from "react-reveal/Roll"
import Loading from "./loading"
import {Bar,Doughnut,Pie,Line} from "react-chartjs-2";
import Graphed from "./graph";
import {FaMedkit,FaBookDead} from "react-icons/fa";
import {FiAlertTriangle} from "react-icons/fi";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";
import CountUp from "react-countup";
import Searcher from "./searcher.js";
import Countries from "./countries.js";


class Stat extends Component {
    constructor()
    {
        super()
        this.state={
            pakdata:[],
            isLoading:true,
            want:true,
            worlddata:[],
            filtered:""
        }
    }

    componentDidMount()
    {
        fetch("https://api.covid19api.com/summary")
            .then(resp => resp.json())
                .then(data => {
                    console.log(data.Countries[126]);
                    this.setState({pakdata:data.Countries[126]})
                    this.setState({isLoading:false})
                    
                })
        let worldapi="https://api.covid19api.com/world/total";       
        fetch(worldapi)   
            .then (resp => resp.json())
                .then (newdata => {
                    console.log(newdata);
                    this.setState({worlddata:newdata})
                    console.log(newdata.TotalConfirmed)
                })
    }
   reverse = () => {
       this.setState({want:!this.state.want})
   }
   gamechange=(e)=>{
    console.log(e.target.value);
    this.setState({filtered:e.target.value})
}
    render() { 
        let {pakdata,worlddata} = this.state;
        return (
        
            this.state.isLoading ? (
            <Loading />
        )
        :(
            <div className="statpage"> 
        <div className="headerstat">
            <Roll left>
                <div className="overt">
                
                <p className="sad" >Total Confirmed Cases </p>
            </div></Roll>
            <Roll left><p className="sad1"><CountUp end={pakdata.TotalConfirmed} duration={2}/></p></Roll>
        </div>
       
       <div className="detailstat">
            <Fade bottom><p className="desc" style={{color:"red"}}>Complete stats</p></Fade>
            <div className="visuals">

           
            <div className="charted">
                   
                <Graphed 
                    actived={parseInt((pakdata.TotalConfirmed)-(pakdata.TotalRecovered)-(pakdata.TotalDeaths))}
                    recovered={pakdata.TotalRecovered}
                    death={pakdata.TotalDeaths}
                    graphswitch={this.reverse}
                    revsignal={this.state.want}
                    />
            </div>
            <div className="rightnormal">
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
           </div>
            </div>
        </div>
        <div className="worldcrisis">
        <h2>World Stats</h2>
            <LightSpeed left><div className="topped">
            
            <div className="info">
            <p className="sup"><CountUp end={worlddata.TotalConfirmed} duration={3}/></p>
            <p className="unsup">Worldwide cases</p>
            </div>
            <div className="info">
            <p className="sup"><CountUp end={worlddata.TotalRecovered} duration={3}/></p>
            <p className="unsup">Worldwide recovered</p>
            </div>
            <div className="info">
            <p className="sup"><CountUp end={worlddata.TotalDeaths} duration={3}/></p>
            <p className="unsup">Worldwide Deaths</p>
            </div>
            </div>
            </LightSpeed>
            <div className="chartedspec">
                   
                   <Graphed 
                       actived={parseInt((worlddata.TotalConfirmed)-(worlddata.TotalRecovered)-(worlddata.TotalDeaths))}
                       recovered={worlddata.TotalRecovered}
                       death={worlddata.TotalDeaths}
                       graphswitch={this.reverse}
                       revsignal={this.state.want}
                       />
               </div>

             <Searcher eventval={this.gamechange}/>  
             <Countries thefilter={this.state.filtered}/>
        </div>
        
        
    </div>)
          );
    }
}
 
export default Stat;