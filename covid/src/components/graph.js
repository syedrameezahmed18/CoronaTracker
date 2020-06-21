import React, { Component, Fragment } from 'react';
import {Line,Bar,Pie} from "react-chartjs-2";

class Graph extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            chartdata:{
                labels:["Deaths","Active","Recovered"],
                datasets:[
                    {
                        label:"Cases In Pakistan",
                        data:[
                            props.death,
                            props.actived,
                            props.recovered
                        ],
                        backgroundColor:[
                            "red",
                            "yellow",
                            "green"
                        ],
                        defaultFontColor:[
                            "red",
                            "yellow",
                            "green"
                        ]
                    }
                ]
                
            }
        }
    }
    
    render() { 
        return ( 
        
            this.props.revsignal ? (
                <Fragment>
                    
                    <Pie data={this.state.chartdata}
                    width={"100%"}
                    height={"350px"} 
                    options={{maintainAspectRatio:false}}
                    />
                    <button className="btn btn-primary" onClick={this.props.graphswitch}>
                        Switch
                    </button>
       
                 </Fragment>
            ):
                <Fragment>
                    <Bar 
                    className="dheit"
                    data={this.state.chartdata}
                    width={"100%"}
                    height={"350px"} 
                    options={{maintainAspectRatio:false}}
                    />
                    <button className="btn btn-primary" onClick={this.props.graphswitch}>
                        Switch
                    </button>
                </Fragment>
            

             );
    }
}
 
export default Graph;