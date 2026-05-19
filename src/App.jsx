import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
