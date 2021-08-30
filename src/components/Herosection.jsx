import React from "react";
import { Button } from "./Button";
import { Container, Row, Image, Col } from "react-bootstrap";
import logo from "../assets/img/transparent-logo-background.png";
import map from "../assets/img/map.svg";
import "./HeroSection.css"
import styled from 'styled-components';
import {Link, Redirect, useHistory} from "react-router-dom";


function HeroSection() {
  const Button = styled.button`
  background-color: #0A7DCD;
  color: white;
  font-family: Poppins;
  font-size: 18px;
  padding: 5px 20px;
  border-color: #0A7DCD;
  border: none;
  border-radius: 0px;
  margin: 2px 2px;
  cursor: pointer;
  height: 50px;
  width: 180px;
`;


const history = useHistory();


  return (

<div class="container">
  <div class="row">
    <div class="col-sm-5 col-sm-pull-5">
    <span className="hero-title">
      La sécurité au quotidien! 
    </span>
    
    <span className="hero-subtitle">
    <p>
      E-7imayati est une plateforme gratuite qui répond à une
      problématique qui n’est pas des moindres : la qualité de l’air et la
      pollution atmosphérique au Maroc. 
      En parcourant plusieurs facteurs, informez-vous sur le niveau de pollution 
      et la qualité de l’air dans l’endroit que vous souhaitez visiter.
    </p>
    </span>

    <div class="boxed">
    <Button type="button" onClick={() => history.push('/login')} >
    Se connecter

    </Button>
    </div>


    </div>
    <div class="col-sm-7 col-sm-push-7" align="center"  >
      
      <Image src={map} width="200%" height="200%" />


    </div>
  </div>
  
</div>


  );
}

export default HeroSection;
