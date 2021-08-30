import React, { useState, useContext, createContext } from "react";
import {Carousel } from "react-bootstrap";

import oumaima from "./../assets/img/oumaima.JPG";
import hiba from "./../assets/img/hiba.JPG";
import imane from "./../assets/img/imane.JPG";
import abd from "./../assets/img/abd.JPG";

import {
  Container,
  Frame,
  Title,
  Inner,
} from "./styles/carousel";


const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);
};


  


export function CarouselContainer() {
  return (
    <Accordion>
      <Accordion.Title>      
        Notre équipe
      </Accordion.Title>
      <Accordion.Frame>
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      src={abd}
    />
    <Carousel.Caption>
      <h3>Abderrahman Es-Sarraoui</h3>
      <p>Embedded Systems</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      src={oumaima}

    />
    <Carousel.Caption>
      <h3>Oumaima Mekkaoui</h3>
      <p>Web Development</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={hiba}
    />
    <Carousel.Caption>
      <h3>Hiba Hossam</h3>
      <p>Team Data</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      src={imane}
    />
    <Carousel.Caption>
      <h3>Imane Magane</h3>
      <p>Marketing</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </Accordion.Frame>
    </Accordion>
  );
}
