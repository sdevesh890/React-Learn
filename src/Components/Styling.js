import React from "react";
import '../style.css';
import style from '../style.module.css';

function Styling()
{
    return(
        <div>
             <h1 className='primary'>Style type 1 in React js</h1>
        <h1 style={{color:'red' , backgroundColor:'skyblue'}}>Style type 2 in React js</h1>
         <h1 className={style.heading}>Style type 3 in React Js</h1>
        </div>
    );
}

export default Styling;