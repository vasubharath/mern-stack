import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/home/home'
import { Routes,Route,Link } from 'react-router-dom'
import Blog from './Pages/blog/blog'



function App() {

  return (
    <>
    <body> 
      <div class="lii">
    <ul>
      <li><Link to="/hello">my info</Link></li>
      <li><Link to="/blog">About me</Link></li>
    </ul>
    </div>
   <Routes>
    <Route path="/" element={<Blog/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/hello" element={<Home/>}></Route>
   </Routes>

   </body>
  
    </>
  )
}

export default App
