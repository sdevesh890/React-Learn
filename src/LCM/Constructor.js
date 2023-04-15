import React ,{Component} from "react";

class Constructor extends Component
{
    constructor()
    {
        super();
        console.log('Constructor');
    }
    render(){
        
        return(
            <div>
            <h1>Hello</h1>
            </div>
        )
    }
}
export default Constructor; 