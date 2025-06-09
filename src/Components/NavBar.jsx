import { Link } from "react-router-dom";

import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#cc6699" }}>
        <div className="navbar">
          <div className="menu-bars" onClick={showSidebar}>
            <FaIcons.FaBars />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div className="menu-bars" onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </div>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="social-icons">
      <a className="icon-ins" href="https://instagram.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </a>
      <a 
     className="icon-fb" href="https://facebook.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebookF} className="icon" />
      </a>
    </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
