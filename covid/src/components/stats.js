import React, { Component } from 'react';
import Roll from "react-reveal/Roll"
import Loading from "./loading"
import {Bar,Doughnut,Pie,Line} from "react-chartjs-2";
import Graphed from "./graph";
import {FaMedkit,FaBookDead} from "react-icons/fa";
import {FiAlertTriangle} from "react-icons/fi";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";


class Stat extends Component {
    constructor()
    {
        super()
        this.state={
            pakdata:[],
            isLoading:true,
            want:true
           
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
        fetch("https://api.covid19api.com/country/pakistan/status/confirmed/live?from=2020-03-01T00:00:00Z&to=2020-06-19T00:00:00Z")   
            .then (resp => resp.json())
                .then (newdata => {
                    console.log(newdata);
                    
                })
    }
   reverse = () => {
       this.setState({want:!this.state.want})
   }

    render() { 
        let {pakdata} = this.state;
        return (
        
            this.state.isLoading ? (
            <Loading />
        )
        :(
            <div className="statpage"> 
        <div className="headerstat">
            <Roll left>
                <div className="overt">
                
                <p className="sad">Total Confirmed Cases </p>
            </div></Roll>
            <Roll left><p className="sad1">{pakdata.TotalConfirmed}</p></Roll>
        </div>
       <LightSpeed right> <div className="detailstat">
            <Fade bottom><p className="desc">Complete stats</p></Fade>
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
        </LightSpeed>
    </div>)
          );
    }
}
 
export default Stat;