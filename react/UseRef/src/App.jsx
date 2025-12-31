import { useEffect, useRef, useState } from "react";
import "./App.css";

// function App() {

//   const countRef = useRef(0);
//   const [countState , setCountState] = useState(0);
// console.log("component rendered")
// function handleUseRef()
// {
//   countRef.current = countRef.current+1;
//   console.log(countRef);
//   console.log("Count Ref:", countRef.current)
// }

// function handleUseState()
// {
//   setCountState(prev=> prev+1);
//   console.log("count of State: ",countState );
// }

//   return (
//     <div className="app-shell">
//       <div className="assignment-card">
//         <h1>useRef</h1>
//           <button onClick={handleUseRef}> increament useRef </button>
//           <button onClick={handleUseState}>Increament State</button>
//       </div>
//     </div>
//   )
// }

// function App() {
// const inpref = useRef(null);

// useEffect(()=>{
//   inpref.current.focus();
// },[])
   

// // function handleFocus()
// // {
// //   inpref.current.focus();
// // }
//   return (
//     <div className="app-shell">
//       <div className="assignment-card">
//         <input ref={inpref} type="text" placeholder="TYpe here"></input>  
//         <input type="text" placeholder="type one"></input>      
//         {/* <button onClick={handleFocus}>CLick here</button> */}
//       </div>
//     </div>
//   )
// }


// export default App;




// function App() {

// const targetSection = useRef(null);
// const targetSection1 = useRef(null);
// function scrollTosection()
// {
//   targetSection.current.scrollIntoView();
// }

//   return (
//     <div >
//       <button onClick={scrollTosection}>go to click</button>
//       <button onClick={()=>targetSection1.current.scrollIntoView()}>go to click</button>
//       <div style={{height:"1000px",background:"pink"}}></div>
//       <div  ref={targetSection} style={{height:"500px",background:"blue"}} >
        
//       </div>
//         <div  ref={targetSection1} style={{height:"500px",background:"red"}} >
        
//       </div>
//     </div>
//   )
// }

// export default App;
 
// import "./App.css";

// function App() {
// const videRef = useRef(null);
//   return (
//     <div className="app-shell">
//       <div className="assignment-card">
//         <video ref={videRef} width="300px" src="https://www.w3schools.com/html/mov_bbb.mp4" />
//         <br/>
//         <button onClick={()=>videRef.current.play()}>Play</button>
//         <button onClick={()=>videRef.current.pause()}>Pause</button>
//       </div>
//     </div>
//   )
// }

// export default App;
import "./App.css";
// import Assignment1 from "./components/Assignment1";
import Assignment2 from "./components/Assignment2";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Assignment2/>
      </div>
    </div>
  )
}

export default App;

//render => commit => effect => return (next effect)