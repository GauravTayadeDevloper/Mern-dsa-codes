import { useCallback } from "react";
import Child3 from "./Child3";
import { useMemo } from "react";
import { useState } from "react";



export default function Assignment3()
{
    
    let [count ,setCount] = useState(0)
        let  data = useMemo(()=>{
            return {id:1,name:"gaurav" ,age:24}
         },[])

         let refresh = useCallback(()=>{
            return  console.log("refreshing");
         },[])

    return(
        <div>
            <button onClick={()=>setCount(count+1)}> Parent clicks {count}</button>
            <Child3 data={data} refresh={refresh} />
        </div>
    )
}


const ActionPanel = React.memo(function ActionPanel({ onSubmit }) {
  console.log("ActionPanel rendered");
  return <button onClick={onSubmit}>Submit</button>;
});

// function App() {
//   const [open, setOpen] = React.useState(false);

//   const handleSubmit = useCallback(() => {
//     console.log("Submitted");
//   });

//   return (
//     <div>
//       <ActionPanel onSubmit={handleSubmit} />

//       <button onClick={() => setOpen(!open)}>
//         Toggle UI
//       </button>
//     </div>
//   );
// }



// const Controls = React.memo(function Controls({ onPlay, onPause }) {
//   console.log("Controls rendered");
//   return (
//     <>
//       <button onClick={onPlay}>Play</button>
//       <button onClick={onPause}>Pause</button>
//     </>
//   );
// });

// function App() {
//   const [dark, setDark] = React.useState(false);

//   const onPlay = React.useCallback(() => {
//     console.log("Play");
//   }, []);

//   const onPause = useCallback(() => {
//     console.log("Pause");
//   },[]);

//   return (
//     <div>
//       <Controls onPlay={onPlay} onPause={onPause} />

//       <button onClick={() => setDark(!dark)}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// }


// import { useMemo, useState } from "react";

// function App() {
//   const [show, setShow] = useState(false);

//   const data = [10, 20, 30, 40];

//   const total = useMemo(() => {
//     console.log("Calculating total");
//     return data.reduce((a, b) => a + b, 0);
//   }, []);

//   return (
//     <div>
//       <h2>Total: {total}</h2>

//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>
//     </div>
//   );
// }

// export default App;

// import { useMemo, useState } from "react";

// const data = [10, 20, 30, 40];

// function App() {
//   const [show, setShow] = useState(false);

  
//   const total = useMemo(() => {
//     console.log("Calculating total");
//     return data.reduce((a, b) => a + b, 0);
//   }, [data]);

//   return (
//     <div>
//       <h2>Total: {total}</h2>

//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>
//     </div>
//   );
// }

// export default App;
