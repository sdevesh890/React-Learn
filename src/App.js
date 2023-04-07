import './App.css';
import Func from './Components/Func';
import ClassCompo from './Components/ClassCompo';
import Propsprac from './Components/Propsprac';
import Stateprac from './Components/Stateprac';
function App()
{
   return(
       <div>
        <h1>Hello React-learn</h1>
        {/* <Func/>
        <ClassCompo/> */}
        {/* <Propsprac name="Devesh Sharma" email="sdevesh890@gmail.com"/> */}
        <Stateprac/>
       </div>
   );
}

export default App;
