import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css"
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div>
            
        <footer className="footer">
                <div className="container">
                    <div className="row">             
                        <div className="col-12  col-sm-4">
                            <h5 className="small-heading">Links</h5>
                            <ul className="list-unstyled">
                                <br/>
                                
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center ">
                                <SocialIcon bgColor="#FFBF00" url="https://www.instagram.com/tapd.co/" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <h5 className="small-heading">Our Address</h5>
                            Colonnade Walk
                            123 Buckingham Palace Rd, Victoria, London, UK 
                        </div>
                        
                </div>
                <div className="row justify-content-center">             
                        <div className="col-auto">
                            <p>© Copyright 2020, Lynk</p>
                        </div>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
