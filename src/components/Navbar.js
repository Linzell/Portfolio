// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React, {component} from "react";
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