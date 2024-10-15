import React from "react";
import { MdOutlineToday, MdHome, MdLogout, MdPerson } from "react-icons/md";
import logo from "logo.png";

import "style/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="nav-menu active">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-menu-items ">
        <li className="nav-item">
          <MdHome size={"2em"} />
          <span>Home</span>
        </li>
        <li className="nav-item">
          <MdOutlineToday size={"2em"} />
          <span>Dashbaord</span>
        </li>
        <li className="nav-item">
          <MdPerson size={"2em"} />
          <span>Profile</span>
        </li>
      </div>
      <div className="nav-actions">
        <MdLogout size={"1.5em"} />
      </div>
    </nav>
  );
};

export default Sidebar;
