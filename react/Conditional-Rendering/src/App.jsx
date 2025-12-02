
import "./App.css";

function App() {
  let isActive =true;
  let message ;
  // if(isActive)
// / {
  //   message="is active";
  // }
  // else
  // {
  //   message="not Active";
  // }

  // if(isActive)
  // {
  //   return <p>is active</p>;
  // }
  // else
  // {
  //   return <p>not Active</p>;
  // }



  return (
    <div className="app-shell">
      <div className="assignment-card">
      {/* <p>{message}</p>    */}
      <div>
        {isActive ? <h1>Is active</h1>:<h1>Not active</h1>}
      </div>
      </div>
    </div>
  )
}

export default App
