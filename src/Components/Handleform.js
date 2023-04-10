import { useState } from "react";
function Handleform()
{
    const [name,setname] = useState("");
    const [tnc , settnc]= useState("");
    const [intereset,setinterset] = useState(false);
    function getinputData(e)
    {
        console.log(name,tnc,intereset);
        e.preventDefault();
    }
    return(
        <div>
            <h1>Handle Form</h1>
            <form action="" onSubmit={getinputData}>
          <input type="text" placeholder="Enter text here" onChange={(e)=>setname(e.target.value)}/>
          <br /><br />
          <select name="" id="" onChange={(e)=>settnc(e.target.value)}>
            <option value="Nothing">Select Option</option>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
          </select>  
          <br /><br />
          <input type="checkbox" name="" id=""  onChange={(e)=>setinterset(e.target.checked)}/> <span>Accept and Condition</span>
          <br /><br />
          <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default Handleform;