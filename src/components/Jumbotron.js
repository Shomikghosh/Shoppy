import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";


function Jumbotron() {
    return (
        <>          
        <div className=" white-section" id="title">
    
          <div className="row">
          <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <h1 className="big-heading">Connect with one tap.</h1>
              <p>The times of sharing long licks or complicated usernames and having to spell out each little letter are so ... 2019. Make a lasting impression with Tap'd.Simply tap your phone and share any profile, number or website you want.</p> 
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-8">
              <img className="title-image" src="https://ucarecdn.com/fd6bc602-8fc0-4d5d-bc61-deb827f75de3/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="iphone-mockup"/>
            </div>
            <div className="col-lg-2 margin"></div>
            <div className="col-lg-6">
              <img src="https://ucarecdn.com/41b05a0d-685a-4567-9249-81935442133a/-/format/auto/-/preview/3000x3000/-/quality/lighter/" width="60%" height="100%"/>
            </div>
            <div className="col-lg-4 second">
              <h1>Make it easy to share craft.</h1>
              <p>Whether you're an artist, a business owner or simply someone who loves technology.Tap'd makes it easy for you to share links.</p>
            </div>
            </div>
          </div>
    
      </>
    )
}

export default Jumbotron;
