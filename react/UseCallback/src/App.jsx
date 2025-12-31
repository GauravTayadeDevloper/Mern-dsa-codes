// import { useCallback, useState } from "react";
import "./App.css";
// import Child from "./components/Child";
// import Assignment1 from "./components/Assignment1";
import Assignment2 from "./components/Assignment2";
import Assignment3 from "./components/Assignment3";
function App() {
//   let [count,setCount]= useState(0);

// let handleClick = useCallback(()=>{
//   console.log("handele click running");
// },[]);

// let onSave = useCallback(()=>{
//   console.log("Saving Data")
// },[])

// let onExport = useCallback(()=>{
//   console.log("Exporting Data")
// },[])

// let onPrint = useCallback(()=>{
//   console.log("printing Data")
// },[])
  return (
    <div className="app-shell">
      <div className="assignment-card">
      {/* <button onClick={()=>{setCount(prev => prev+1)}}>count {count}</button> */}
        {/* <Child  handleClick={handleClick}/> */}

        {/* <Assignment1 onSave={onSave} onExport={onExport} onPrint={onPrint} /> */}
        {/* <Assignment2/> */}
        <Assignment3/>
      </div>
    </div>
  )
}

export default App;

// function is passed to child and child has to memoised