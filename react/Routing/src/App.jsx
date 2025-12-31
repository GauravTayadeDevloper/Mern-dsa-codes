
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import UserDetailes from './pages/UserDetailes'
import PostDetails from './pages/PostDetails'

function App() {


  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product/:id' element={<Product/>} />
    <Route path='/users/:userid' element={<UserDetailes/>}/>
    <Route path='/posts/:postId' element={<PostDetails/>} />
   </Routes>      </div>
    </div>

   
  )
}

export default App
//routing
//single page 
// dynamic routing  