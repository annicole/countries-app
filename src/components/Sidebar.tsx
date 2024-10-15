import React from "react";
import { MdOutlineToday, MdHome, MdLogout, MdPerson } from "react-icons/md";
import logo from "logo.png";

import "style/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="nav-menu active">
      <div className="d-flex my-4 ms-3">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-menu-items ">
        <li className="nav-item">
          <MdHome size={"1em"} />
          <span>Home</span>
        </li>
        <li className="nav-item">
          <MdOutlineToday size={"1em"} />
          <span>Dashbaord</span>
        </li>
        <li className="nav-item">
          <MdPerson size={"1em"} />
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
