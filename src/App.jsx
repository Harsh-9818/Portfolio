import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Stack from './components/Stack'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='stack' element={<Stack/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='project' element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App
