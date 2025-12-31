import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(()=>import("./components/Home"))
const About = React.lazy(()=>import("./components/About"))
const Settings = React.lazy(()=>import("./components/Settings"))
const Profile = React.lazy(()=>import("./components/Profile"))
// import Home from "./components/Home";
// import About from "./components/About";
// import Settings from "./components/Settings";
// import Profile from "./components/Profile";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Navbar/>
        <Suspense fallback={<h3>Loading .....</h3>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/settings" element={<Settings/>}/>           
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App;

// ccccccbccc