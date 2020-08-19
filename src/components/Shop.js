import React,{useState} from 'react';
import Navbar from "./Navbar";
import Footer from './Footer';
import "./Product.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Pink from "../images/Pink.png";
import Yellow from "../images/Yellow.png";
import Black from "../images/black.png";
import Grad from "../images/gradientsky.png";
import Green from "../images/green.png";
import LightBlue from "../images/lightblue.png";
import Orange from "../images/orange.png";
import Purple from "../images/purple.png";
import Red from "../images/red.png";



function Shop() {
    const [cart,setCart]= useState("0");

    return (
        <div>
            <Navbar />
            <hr/>
            <div class="col-12">
               <h3 class="big-heading">Shop</h3>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div class="card" >
                            <img class="card-img-top shp-card" src={Pink} alt="Card image cap"/>
                            <div class="card-body"> <hr />
                                <h5 class="card-title">Pink</h5>
                                <p class="card-text">$19.95</p>
                                <a href="#" class="btn btn-primary">Add to the cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" >
                            <img class="card-img-top shp-card" src={Yellow} alt="Card image cap"/>
                            <div class="card-body"> <hr />
                                <h5 class="card-title">Yellow</h5>
                                <p class="card-text">$19.95</p>
                                <a href="#" class="btn btn-primary">Add to the cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                            <div class="card" >
                        <img class="card-img-top shp-card" src={Black} alt="Card image cap"/>
                        <div class="card-body"> <hr />
                            <h5 class="card-title">Black</h5>
                            <p class="card-text">$19.95</p>
                            <a href="#" class="btn btn-primary">Add to the cart</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div class="card" >
                            <img class="card-img-top shp-card" src={Grad} alt="Card image cap"/>
                            <div class="card-body"> <hr />
                                <h5 class="card-title">Gradient Sky</h5>
                                <p class="card-text">$19.95</p>
                                <a href="#" class="btn btn-primary">Add to the cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" >
                            <img class="card-img-top shp-card" src={Green} alt="Card image cap"/>
                            <div class="card-body"> <hr />
                                <h5 class="card-title">Green</h5>
                                <p class="card-text">$19.95</p>
                                <a href="#" class="btn btn-primary">Add to the cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                            <div class="card" >
                        <img class="card-img-top shp-card" src={LightBlue} alt="Card image cap"/>
                        <div class="card-body"> <hr />
                            <h5 class="card-title">Light Blue</h5>
                            <p class="card-text">$19.95</p>
                            <a href="#" class="btn btn-primary">Add to the cart</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <div class="card" >
                            <img class="card-img-top shp-card" src={Red} alt="Card image cap"/>
                            <div class="card-body"> <hr />
                                <h5 class="card-title">Red</h5>
                                <p class="card-text">$19.95</p>
                                <a href="#" class="btn btn-primary">Add to the cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" >
                            <img class="card-img-top shp-card" src={Purple} alt="Card image cap"/>
                            <div class="card-body"> <hr />
                                <h5 class="card-title">Purple</h5>
                                <p class="card-text">$19.95</p>
                                <a href="#" class="btn btn-primary">Add to the cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                            <div class="card" >
                        <img class="card-img-top shp-card" src={Orange} alt="Card image cap"/>
                        <div class="card-body"> <hr />
                            <h5 class="card-title">Orange</h5>
                            <p class="card-text">$19.95</p>
                            <a href="#" class="btn btn-primary">Add to the cart</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            
            
           
            <hr />
            <Footer />
        </div>
    )
}

export default Shop;
