import React, { useEffect, useState } from 'react';
import logo from '../assets/e-Signage.png'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBIcon
  } from 'mdb-react-ui-kit';

import { Link, useLocation } from 'react-router-dom';
import './Header.css';


export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();
  useEffect(() => {
    if(location.pathname === "/"){
      setActiveTab("Dashboard");
    }else if (location.pathname === "/Home2") {
      setActiveTab("Home");
    }else if (location.pathname === "/add") {
      setActiveTab("AddUser");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <div>
      <MDBNavbar className='p-0' fixed='top' expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
        <MDBContainer className='p-0' fluid>
          <MDBNavbarBrand className='p-0' href='#'><img src={logo} className="App-logo" alt="logo" /></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                  <Link to="/Home2" className="nav-link link">
                    <p className={`${activeTab === "Home" ? "active" : ""}`}onClick={() => setActiveTab("Home")}>Home</p>
                  </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                  <Link to="/add" className="nav-link link">
                    <p className={`${activeTab === "AddUser" ? "active" : ""}`} onClick={() => setActiveTab("AddUser")}>Add User</p>
                  </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                  <Link to="/about" className="nav-link link">
                    <p className={`${activeTab === "About" ? "active" : ""}`}onClick={() => setActiveTab("About")}>About</p>
                  </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}
