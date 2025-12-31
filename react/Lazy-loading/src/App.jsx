import React, {  Suspense, useState } from "react";
import "./App.css";
const Dashboard = React.lazy(()=> import("./Dashboard"));
const Profile = React.lazy(()=>import("./Profile"));

// import Dashboard from "./Dashboard";
// import Profile from "./Profile";
function App() {

  const [page ,setPage] = useState("dashboard");
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h2>Welcome to my app</h2>
        <button onClick={()=>setPage("dashboard")}>dashboard</button>
        <button onClick={()=>setPage("profile")}>Profile</button>
        <Suspense fallback={<h1>Loading.....</h1>}>
          {page === "dashboard"  && <Dashboard/>}
         {page === "profile" && <Profile/>}
        </Suspense>
        
      </div>
    </div>
  )
}

export default App;