import { useState } from "react";
function Stateprac()
{
    const [name, updatename] = useState("Devesh Sharma");
    function namechange()
    {
        updatename("Dev Rokhel");

    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={namechange}>Click here</button>
        </div>
    );
}
export default Stateprac;