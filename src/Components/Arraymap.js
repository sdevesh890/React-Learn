import React from "react";

function Arraymap()
{
    // const student = ["Devesh","Puneet","ketan","Garima"];

    // for(let i=0; i<student.length; i++)
    // {
    //     console.log(student[i]);
    // }
    const student = [
        {name:"Devesh" ,email:"sdevesh890@gmail.com",marks:45} ,
        {name:"Puneet" ,email:"Puneet890@gmail.com",marks:25},
        {name:"ketan" ,email:"ketan890@gmail.com",marks:35},
        {name:"Garima" ,email:"garima890@gmail.com",marks:42}
    ]
    return(
        <div>
            <h1>Array and map in React js </h1>
            <table border="1"align="center">
            {
               student.map((data)=>
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.marks}</td>
                  </tr>
               )
            }
             </table>
        </div>
    );
}
 
export default Arraymap;