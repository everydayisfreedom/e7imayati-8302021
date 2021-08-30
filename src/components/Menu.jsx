import React from "react";
import { Button } from "./Button";
import { Container, Row, Image, Col } from "react-bootstrap";
import logo from "../assets/img/transparent-logo-background.png";
import map from "../assets/img/map.svg";
import "./HeroSection.css"
import styled from 'styled-components';
import {Link, Redirect, useHistory} from "react-router-dom";

import mapico from "./../assets/img/mapico.svg";
import personico from "./../assets/img/personico.svg";
import cameraico from "./../assets/img/cameraico.svg";


function Menu() {
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
  height: 244px;
  width: 243px;
  
`;


const history = useHistory();


  return (

    

      <div className="container" align="center">

          <span className="hero-title" align="center" >
            Menu
            
          </span>

          <div className="row" align="left">
            <span className="hero-subtitle1">
            <p><b>Bienvenue,</b> user.firstName</p>
            </span>
          </div>


          <div className="row">

          <div className="col" align="center"  >
                <Button type="button"  className = "btn-grad" onClick={() => history.push('/Map')} >
                  <div className="container">
                  <img src={mapico} alt="mapico"
                  width="60"
                  height="60"/>
                  <div className="row"><br/>Voir la carte</div>
                </div>
                </Button>
              </div>


              <div className="col" align="center"  >
                <Button type="button"  className = "btn-grad" onClick={() => history.push('/Research')} >
                  <div className="container">
                  <img src={personico} alt="personico"
                  width="60"
                  height="60"/>
                  <div className="row"><br/>Rechercher une personne</div>
                </div>
                </Button>
              </div>




              <div className="col" align="center"  >
                <Button type="button" className = "btn-grad" onClick={() => history.push('/data')} >
                <div className="container">
                  <img src={cameraico} alt="cameraico"
                  width="60"
                  height="60"/>
                  <div className="row"><br/>Voir le feed Camera</div>
                </div>
                </Button>


              </div>
         
      <div className="mt-5" align="center">
          <span className="hero-subtitle">
          <p><a href="https://www.google.com/">
          Aller sur le site administrateur
          </a>
          </p>
          <hr/>
          </span>
      </div>
       </div>
       </div>





  );
}

export default Menu;
