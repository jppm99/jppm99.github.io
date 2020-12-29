import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <Link to="/" className="logo">
            <h1 className="logo-size secondary-font">
              <span className=" text-danger font-weight-bold">Mota</span>
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-items navbar-nav justify-content-end w-100">
              <li className="nav-item ml-sm-5">
                <Link to="/" className="navbar-button">
                  Home
                </Link>
              </li>
              <li className="nav-item ml-sm-5">
                <Link to="/CV" className="navbar-button">
                  CV
                </Link>
              </li>
              <li className="nav-item ml-sm-5">
                <Link to="/Skills" className="navbar-button">
                  Skills
                </Link>
              </li>
              <li className="nav-item ml-sm-5">
                <Link to="/Projects" className="navbar-button">
                  Projects
                </Link>
              </li>
              <li className="nav-item ml-sm-5">
                <Link to="/Contact" className="navbar-button">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    
}

export default Navbar;