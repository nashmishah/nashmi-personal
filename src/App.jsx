import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css'
import Home from '../pages/home'
import About from '../pages/about'
import Thoughts from '../pages/thoughts'
import Projects from '../pages/projects'
import Layout from '../pages/layout'
import NoPage from '../pages/NoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="thoughts" element={<Thoughts/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
