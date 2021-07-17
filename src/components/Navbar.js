// src/components/Navbar.js

import React from "react";
import SideBar from "./Sidebar";
import "./Sidebar.css"

export default function Navbar() {
    return (
      <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
      </div>
    </div>
    );
}