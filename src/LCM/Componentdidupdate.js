import React ,{Component}from "react";

class Componentdidupdate extends Component
{
    constructor()
    {
        super();
        this.state={
            name : "Devesh Sharma"
        }
        console.log('Constructor');
    }
    componentDidUpdate()
    {
        console.log('Componentdidupdate function work');
    }
    render()
    {
        console.log('Render');
        return(
            <div>
                <h1>Component did Update</h1>
                <button onClick={()=>this.setState({name:"Devesh GLA"})}>Update name</button>
            </div>
        );
    }
}
export default Componentdidupdate;