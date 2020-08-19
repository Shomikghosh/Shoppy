import React from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link} from "react-router-dom";
import Image from "../images/icon.png";


function Navbar() {
  return (
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="icon"to="/"><img src={Image}/></Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <FontAwesomeIcon icon={faCartPlus} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
  );
}






export default Navbar;
