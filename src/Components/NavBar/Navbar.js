import React from "react";
import logo from "./logo.svg";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            CoderHouse React
          </a>
          <ul className="tofloat">
            <li>
              <a href="">Productos</a>
            </li>
            <li>
                <CartWidget/>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar