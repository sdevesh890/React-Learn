import React, {Component }   from 'react'

class Render extends Component
{
    constructor()
    {
        super();
        this.state={
            name : "Devesh Sharma"
        }
    }
    render()
    {
        console.log('Render method',this.state.name);
        return(
            <div>
                <h1>Render LCM</h1>
                <button onClick={()=>this.setState({name : "Dev Coder"})}>Update Render</button>
            </div>
        );
    }
}
export default Render;  