import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import {Routes,Route} from "react-router-dom"
// import Landing from "./Components/Landing";
// import About from "./Components/About";
// import Contact from "./Components/Contact";

const Landing = React.lazy(()=>import("./Components/Landing"))
const About = React.lazy(()=>import("./Components/About"))
const Contact = React.lazy(()=>import("./Components/Contact"))

import { Suspense } from "react";
function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <nav>
          <Link to="/about">about</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Landing</Link>
          
        </nav>
<Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App;