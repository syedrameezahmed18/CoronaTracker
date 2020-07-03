import React, { Component } from 'react';
import Scroll from "./scroll.js";

class Countries extends Component {
    
    constructor()
    {
        super()
        this.state={
            ccs:[],
            cname:[],   
            ccase:[]
        }
    }
    componentDidMount()
    {
        fetch("https://api.covid19api.com/summary")
            .then(resp => resp.json())
                .then(multidata => {
                    console.log(multidata);
                    console.log(multidata.Countries);
                    this.setState({cname:multidata.Countries});
                    this.setState({ccase:multidata.Countries.TotalConfirmed});
                })
    }
    render(){
            const filtered = this.state.cname.filter(count => {
            return count.Country.toLowerCase().includes(this.props.thefilter.toLowerCase());
            })
            
            return(
                <Scroll className="margined">
                <div className="everything">
                    {   
                        filtered.map((fill)=>{
                        return(
                            <div className="rod">
                                <p className="cnames">{fill.Country}</p> 
                                <p className="caseses">{fill.TotalConfirmed}</p>
                            </div>  
                        )
                    })
                    }
                </div>
                </Scroll>
            )
            
    }

}
export default Countries;