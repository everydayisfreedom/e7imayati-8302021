import React from "react";
import { Button } from "./Button";
import { Container, Row, Image, Col } from "react-bootstrap";
import logo from "../assets/img/transparent-logo-background.png";
import map from "../assets/img/map.svg";
import "./HeroSection.css"
import styled from 'styled-components';
import {Link, Redirect, useHistory} from "react-router-dom";

import city from "./../assets/img/7879.jpg";



function HeaderFAQ() {
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


<div className="container">
  <div className="row">
    <div className="col-sm-5 col-sm-pull-5">
            <span className="hero-title" align="left" >
                  E-7imayati,
                  </span>
                  <span className="hero-subtitle">
                  <p><b>découvrez ce que vous ne savez toujours pas.</b></p>
                  </span>
    </div>


    <div className="col-sm-4 col-sm-push-5" align="center"  >
      <Image src={city} />


      
    </div>
  </div>
  
  <div className="row">
    <div className="col" align="center">
    <span className="hero-subtitle">
                  <p><b>Notre Mission</b></p>
                  </span>

  <p>
  E-7imayati tacle deux problématiques dans le domaine de la sécurité, dont la Sécurité publique la sécurité sanitaire .
  La sécurité est un problème alarmant dans les grandes villes d’où l’utilité d’une plateforme web qui permet à l'administration d’un compound privé
   ou à l’autorité d'une ville d’identifier les personnes suspectes ou d’identifier des enfants perdus. Quant à la sécurité sanitaire, 
   la pollution de l’air est un problème environnemental majeur, qui a, en surcroit, un impact important sur le climat à l'échelle globale.
  </p>
    </div>

    <div className="col" align="center">


    <Button type="button" onClick={() => history.push('/login')} >
      Voir la démo
    </Button>
</div>
  
  </div>

</div>


        

        
            






  );
}

export default HeaderFAQ;
