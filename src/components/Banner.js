import React from "react";
import "./Banner.css"
import "bootstrap/dist/css/bootstrap.min.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faUserFriends,
  faLock,
  faTint,
  faLink,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
    <div className="colored-section" id="features">
      <div className="row">
        <div className="col-lg-6">
          <FontAwesomeIcon className="feature-icon" icon={faMobileAlt} />
          <p>No need for app</p>
          <FontAwesomeIcon className="feature-icon" icon={faUserFriends} />
          <p>No need for the other person to have Tap'd</p>
          <FontAwesomeIcon className="feature-icon" icon={faLock} />
          <p>No need to provide any passwords</p>
        </div>
        <div className="col-lg-6">
          <FontAwesomeIcon className="feature-icon" icon={faTint} />
          <p>Water proof</p>
          <FontAwesomeIcon className="feature-icon" icon={faLink} />
          <p>Direct linking to social media profile</p>
          <FontAwesomeIcon className="feature-icon" icon={faCog} />
          <p>Manage all links through our web app</p>
        </div>
      </div>
      {/* <div class="container bg">
        <div class="row">
          <div class="col-sm">
          </div>
          <div class="col-sm">
          <Link to="/shop"><button type="button" className="btn btn-warning Button">Shop</button></Link>
          </div>
          <div class="col-sm">
          </div>
        </div>
      </div> */}
    </div>
    <div class="container bg">
        <div class="row">
          <div class="col-sm">
          </div>
          <div class="col-sm">
          <Link to="/shop"><button type="button" className="btn btn-warning Button">Shop</button></Link>
          </div>
          <div class="col-sm">
          </div>
        </div>
      </div>
      </div>
  );
}

export default Banner;
