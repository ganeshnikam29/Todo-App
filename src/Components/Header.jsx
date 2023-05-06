import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">To-do App</h1>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <NavLink to="/bystatehook">By useState Hook </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/byusereducer"> By useReducer Hook</NavLink>
          </li>
          <li className="navigation-item">
            <NavLink to="/byreduxtoolkit">By Redux Toolkit</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
