import React,{useState} from "react"
function Validform()
{
    const [user,setuser] = useState("");
    const [password , setpassword] = useState("");
    const [userErr , setuserErr] = useState(false);
    const [passErr , setpassErr] = useState(false);
    function submithandle(e)
    {
        if(user.length<3 || password.length<3)
        {
            alert('Type Correct validate USER OR PASSWORD');
        }
        e.preventDefault();
    }
    function userhandler(e)
    {
        let item = e.target.value;
        if(item.length<=3)
        {
            setuserErr(true);
        }else 
        {
            setuserErr(false);
        }
        setuser(item);
    }
    function passhandler(e)
    {
        let item = e.target.value;
        if(item.length<=3)
        {
            setpassErr(true);
        }else 
        {
            setpassErr(false);
        }
        setpassword(item);
    }
    return(
        <div>
            <form action="" onSubmit={submithandle}>
                <input type="text" placeholder="Enter the text" onChange={userhandler} />
                {userErr?<span>Not valid user</span>:""}
                <br /><br />
                <input type="text" placeholder="Enter Password" onChange={passhandler}/>
                 {passErr?<span>Password Not valid</span>:""}
                <br /><br />
                <input type="submit" value="SUBMIT" />
            </form>

        </div>
   );
}
export default Validform;