import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";


function Contact() {
    return (
        <div className="conatct" >
        <div>
            <Navbar />
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="col-12">
                            <h3 className="big-heading">Contact Us</h3>
                            </div>
                    </div>
                    
                
                </div>
            
        </div>
       
        <div className="col-12">
              <h3 className="mid-heading">Location Information</h3>
           </div>
        <div className="container">
            <div className="row">
                <div className="col">
                <h5 className="small-heading">Our Address</h5>
                    <div >
                    Colonnade Walk 123 <br/>
                    Buckingham Palace Rd, <br/>
                    Victoria, London, UK

                    <br/>
                        <a href="mailto:help@tapd.co">help@tapd.co</a>
		           </div>
                </div>
                <div className="col">
                <h5 className="small-heading">Map of our Location</h5>

                </div>
            </div>
        </div>
        <hr />
        <div >
                    
                    <div className="col-12">
                           <h3 className="mid-heading">Send us your Feedback</h3>
                     </div> 
                
                </div>
        <div >
           
            <div className="container contact__form">
                <div className="row">
                    <div className="col">
                                    <div className="col-12 col-md-9">
                                        <br/><br/>
                                        <form>
                                            
                                            <div className="form-group row">
                                                <label for="firstname" className="col-md-2 col-form-label">First Name</label>
                                                
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name"/>
                                                
                                                </div>
                                            </div>
                                            
                                            <div className="form-group row">
                                                
                                                <label for="lastname" className="col-md-2 col-form-label">Last Name</label>
                                                
                                                <div className="col-md-10">
                                                    <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name"/>
                                                
                                                </div>
                                            
                                            </div>
                                            
                                            
                                            <div className="form-group row">
                                                
                                                <label for="email" className="col-md-2 col-form-label">Email</label>
                                                
                                                <div className="col-md-10">
                                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                                                
                                                </div>
                                            
                                            </div>
                                            
                                            
                                            <div className="form-group row">
                                                
                                                <label for="feedback" className="col-md-2 col-form-label">Your Feedback</label>
                                                
                                                <div className="col-md-10">
                                                    <textarea  className="form-control" id="feedback" name="feedback" rows="12"></textarea>
                                                
                                                </div>
                                            
                                            </div>
                                            
                                            <div className="form-group row">
                                            <div className="offset-md-2 col-md-10">
                                                <button type="submit" className="btn btn-dark">Send Feedback</button> 
                                            </div> 
                                            </div>
                                        
                                        </form>
                                    </div>
                                    <div className="col-12 col-md">
                                    </div>
                            </div>
                            </div>
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
            </div>
            

            <hr/>
            <Footer />
        </div>
    )
}

export default Contact;
