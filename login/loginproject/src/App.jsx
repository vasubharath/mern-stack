import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./login";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./signup";
import Movie from "./movie";
import Create from "./create";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/movie" element={<Movie/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/login" element={<Login />}></Route>
       
      </Routes>
    </>
  );
}

export default App;
