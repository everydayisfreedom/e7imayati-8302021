import React from "react";
import Cards from "../components/Cards";
import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer";
import Contactus from "../components/Contactus";

import { Row, Col, Container } from "react-bootstrap";
import APropos from "../components/APropos";


function Dashboard() {
  return (

    
    <Container fluid>
        <Menu />

        <Footer />
    </Container>
    
  );
}

export default Dashboard;
