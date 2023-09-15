/* eslint-disable react/react-in-jsx-scope */
// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Login from './views/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './views/Dashboard/Dashboard';
import Home from './views/Home/Home';
import Home2 from './pages/Home';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import Header from './layout/Header';
import SideBar from './layout/Sidebar';


function App() {
  const [margin, setMargin] = useState("275px");

  const marginfn = (value) => {
    setMargin(value);
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      
      <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
        <Header/>
        <div className="d-flex justify-content-center">
          <ToastContainer position="top-center"/>
        </div>
        <SideBar marginfn={marginfn} />
        <main
            className="main_content"
            id="main_content"
            style={{ marginLeft: margin }}
          >
          <Routes>
            <Route path='/Dashboard' element={<Dashboard/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>

            
            <Route exact path='/' element={<Home2/>}></Route>
            <Route path='/Home2' element={<Home2/>}></Route>
            <Route path='/Add' element={<AddEdit/>}></Route>
            <Route path='/Update/:id' element={<AddEdit/>}></Route>
            <Route path='/View/:id' element={<View/>}></Route>
            <Route path='/About' element={<About/>}></Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
