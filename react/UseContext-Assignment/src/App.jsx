import "./App.css";
import { Dashboard } from "./component/Dashboard";

import Login from "./component/Login";
import Navbar from "./component/Navbar";
import LoginProvider from "./context/LoginProvider";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <LoginProvider>
          
          <Navbar/>
          <Login/>
          <Dashboard/>
        </LoginProvider>
      </div>
    </div>
  )
}

export default App;