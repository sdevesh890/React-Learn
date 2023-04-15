import React from "react";

class Componentshoulupdate extends React.Component
{
    constructor()
    {
        super();
        this.state={
            count:0
        }
    }
   shouldComponentUpdate()
    {
        console.log("Component should update function work");
        return true;
    }
    render()
    {
        return(
           <div>
            <h1>Component Should update {this.state.count}</h1>
            <button onClick={()=>{this.setState({count : this.state.count+1})}}>Update Count</button>
           </div>
        );
    }
}
export default Componentshoulupdate;