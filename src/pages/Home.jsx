import React from "react";
import Cards from "../components/Cards";
import HeroSection from "../components/Herosection.jsx";
import Footer from "../components/Footer";
import Contactus from "../components/Contactus";

import { Row, Col, Container } from "react-bootstrap";
import APropos from "../components/APropos";


function Home() {
  return (

    
    <Container fluid>

        <div>
          <HeroSection/>
          <hr />
        </div>
        
        <div>
          <APropos />
        </div>

        <div>
          <hr />
          <Contactus />
        </div>

        <div>
          
          <Footer />
        </div>

    </Container>
  );
}

export default Home;
