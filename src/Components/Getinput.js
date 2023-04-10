import {useState}from 'react'
function Getinput()
{
    const[data , updatedata] = useState(null);
    const[print , updateprint] = useState(false);
    function text(val)
    {
       updatedata(val.target.value);
       updateprint(false)
    }
    return(
        <div>

            {
                print?<h1>{data}</h1>:null
            }
            Enter text:<input type="text" onChange={text}/>
            <button onClick={()=>updateprint(true)}>Submit</button>
        </div>
    );
}
export default Getinput;