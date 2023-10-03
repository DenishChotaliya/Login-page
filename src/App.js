import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navebar from "./Navebar";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import Detile from "./Detile";
import Edit from "./Edit";
// import { BrowserRouter as Router } from 'react-router-dom'//

function App() {
  
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navebar/>}>
            <Route path="Home" element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="admin" element={<Admin/>} />
            <Route path="detile/:userid" element={<Detile/>} />
            <Route path="edit" element={<Edit/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
