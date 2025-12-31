import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Company from './pages/Company'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import MovieList from './components/Movielist'
import DashBoard from './pages/DashBoard'
import Billing from './pages/Billing'
import Settings from './pages/Settings'


function App() {


  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/contact" element={<Contact/>}/>
          <Route path='movies/:movieid' element={<MovieList/>}/>
          <Route path="/about" element={<About/>}>
            <Route path='team' element={<Team/>} />
            <Route path='company' element={<Company/>}/>
          </Route>
          <Route path='/dashboard' element={<DashBoard/>}>
            <Route path='billing' element={<Billing/>}/>
            <Route path='settings' element={<Settings/>}/>
          </Route>
        </Routes>
        </div>
    </div>

   
  )
}

export default App
