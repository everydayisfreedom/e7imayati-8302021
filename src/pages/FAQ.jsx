import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { CarouselContainer } from "../containers/carousel";
import { JumbotronContainer } from "../containers/jumbotron";
import {Container, Row, Col} from "react-bootstrap";
import HeaderFAQ from "../components/HeaderFAQ";



const FAQ = () => {
  return (
<> 

<Container>
<HeaderFAQ/>
<Container>

  
  
</Container>

</Container>
    <div class="container">
        <div class="row">
            <div class="col-sm-5">
        
              <span>
                <h1>À propos de nous</h1>
                <hr/>
              </span>

            </div>
          </div>
        </div>

 <h2>À propos de nous</h2>


  
  <h2>Rencontrer l'équipe</h2>

    <CarouselContainer />
  
  <h2>Nos Services</h2>

    <JumbotronContainer />


    <FaqsContainer />

      </>
  );
};

export default FAQ;
