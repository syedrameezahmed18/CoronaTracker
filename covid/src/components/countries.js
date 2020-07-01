import React, { Component } from 'react';

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
    return(
        <div className="everything">
            {   this.state.cname.map((count)=> {
                return(
               <div className="rod">
               <p className="cnames">{count.Country}</p> 
               <p className="caseses">{count.TotalConfirmed}</p>
             </div>  
                )
            })
            }
        </div>
    )
    }

}
export default Countries;