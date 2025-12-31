import { useState } from 'react'
import './App.css'
import ThemeProvider from './context/themeProvider'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
          <ThemeProvider>
                <Home/>
            </ThemeProvider>
  )
}

export default App
