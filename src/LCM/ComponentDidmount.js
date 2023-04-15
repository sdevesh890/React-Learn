import React ,{Component}from "react";

class ComponentDidmount extends Component
{
    constructor()
    {
        super();
        console.log('Constructor');
    }
    componentDidMount()
    {
        console.log('Component DID mount');
    }
    render()
    {
        console.log('Render');
        return(
            <h1>Component DID mount</h1>
        );
    }
}
export default ComponentDidmount;