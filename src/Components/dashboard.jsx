import React from "react";
import { useState, useEffect } from "react";
// import form from "./iamges/Form.png"
import SideBar from "./SideBardata";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import jwtDecode from "jwt-decode";

export const Dashboard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(jwtDecode(localStorage.getItem("token")).email);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = windowWidth <= 768; // set breakpoint as desired

  return (
    <div>
       
      <h1 className="dashboard-heading">Welcome</h1>
      <div className="sidebar"><SideBar /></div>
     
      
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      
      <div className="dashboard-container">
        <div className="cards-container">
          <div className="card">
            <h2>Total Users</h2>
            <p>500</p>
          </div>
          <div className="card">
            <h2>Revenue</h2>
            <p>$50,000</p>
          </div>
          <div className="card">
            <h2>Orders</h2>
            <p>200</p>
          </div>
          <div className="card">
            <h2>Product Views</h2>
            <p>5,000</p>
          </div>
          <button className="logout-button">
            <Link to="/">Logout</Link>
          </button>
        </div>
      </div>
      <div className="user-name">{username}</div>
    </div>
  );
};
