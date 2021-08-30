import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo1 from "../assets/img/hands.svg";
import logo2 from "../assets/img/person.svg";
import logo3 from "../assets/img/action.svg";
import {Link, Redirect, useHistory} from "react-router-dom";

import styled from 'styled-components';

const APropos = () => {


  const history = useHistory();

  const Button = styled.button`
  background-color: #0A7DCD;
  color: white;
  font-family: Poppins;
  font-size: 18px;
  padding: 5px 20px;
  border-color: white;
  border-radius: 0px;
  margin: 2px 2px;
  cursor: pointer;
  height: 50px;
  width: 180px;
`;

  const cards = [
    {
      logo: logo3,
      title: "Action Inspirante",
      body: "E-7imayati vise à minimiser les risques néfastes de la pollution sur la santé et aspire à motiver des actions réglementaires, volontaires et incitatives pour maintenir une qualité durable de l'air.",
    },
    {
      logo: logo2,
      title: "Renforcer la sensibilisation",
      body: "E-7imayati a pour but de sensibiliser la population générale aux dangers liés à la pollution de l'air, et de permettre l’engagement du citoyen dans cet importante problématique aussi bien au niveau sanitaire qu'environnemental.",
    },
    {
      logo: logo1,
      title: "Qualité de l'air",
      body: "La pollution de l’air est un problème environnemental majeur, qui a, en outre, un impact important sur le climat à l'échelle globale. Selon les chiffres 2016 de la Banque mondiale : la mauvaise qualité de l’air est le quatrième facteur de décès prématuré sur Terre.",
    },
  ];


  return (
    <div id="a-propos" className="bg-primary p-5">
      <div class="container">
        <div class="row">
            <div class="col-sm-5">
              <h1>À propos
              <hr className="propos"/>
              </h1>
            </div>
          </div>
        </div>
      
      <Row className="p-0 p-xxl-5">
        {cards.map((c,k) => (
          <Col lg={4} className="p-0 p-xxl-5" key={k}>
            <Card className="bg-transparent p-0 p-xxl-5 border-0 shadow-none w-100" >
              <Card.Img variant="top" src={c.logo} className="p-5" style={{ width: '280px', height: '280px' }} />
              <Card.Body>
                <Card.Title className="h5 text-white" >{c.title}</Card.Title>
                <hr className="propos"/>
                <Card.Text className="p text-white" style={{textAlign:'justify'}} align="center">{c.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

    <Button type="button" onClick={() => history.push('/faq')} >
    En savoir plus
    </Button>

      </Row>
    </div>
  );
};

export default APropos;
