import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { showSideBar, closeSideBar } = useGlobalContext();
  return (
    <aside className={`${showSideBar ? `sidebar show-sidebar` : `sidebar`}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((eachLink) => {
          const { id, url, text, icon } = eachLink;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((eachLink) => {
          const { id, url, icon } = eachLink;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
