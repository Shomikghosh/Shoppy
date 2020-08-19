import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Jumbotron from "./Jumbotron";
import Announcement from "./Announcement";
import Footer from "./Footer";

function Home() {
  return (
    <div>
     <Navbar />
     <hr />
     {/* <Announcement /> */}
     <Jumbotron />
      <Banner />
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
