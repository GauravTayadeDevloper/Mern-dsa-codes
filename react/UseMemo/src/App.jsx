// import { useMemo, useState } from "react";
import "./App.css";
import Assignment1 from "./Assignment1";
import Assignment2 from "./Assignment2";
import Assignment3 from "./Assignment3";
import Assignment4 from "./Assignment4";
import Assignment5 from "./Assignment5";
import Assignment6 from "./Assignment6";

// function slowCalculatio(num)
// {
//   console.log('slow Calculation running ...');
//   let total=0;
//   for(let i=0;i<1_000_000_000;i++)
//   {
//     total+=num;
//   }
//   return total;
// }

// function App() {
// let [count,setCount] = useState(0)
// let [dark ,setDark] = useState(false);
// let result = 
// useMemo(()=>{
//   return slowCalculatio(count);
// },[count])

// let themeStyle = {
//   backgound: dark? "#333" : "#fff",
//   color : dark ? "#fff" : "#333"
// };
//   return (
//     <div className="app-shell">
//       <div className="assignment-card" style={themeStyle}>
//         <p>{result}</p>
//         <button onClick={()=>setCount(count+1)}>Count {count}</button>

//         <button onClick={()=>setDark(!dark)}>Theme</button>
//       </div>
      
//     </div>
 // )
// return(
//   <Assignment1/>
// )

// }

// export default App;

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        {/* <Assignment1/>
        <Assignment2/> */}
        {/* <Assignment3/> */}
        {/* <Assignment4/> */}
        <Assignment6/>
        {/* <Assignment5/> */}
      </div>
    </div>
  )
}

export default App;
/*
a
c
c
a
b
c
b
c<d></d>
c
c
c
c
c
c
c
b
c
c
c
*/