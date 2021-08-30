import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { MdAccountCircle, MdError, MdPersonOutline } from "react-icons/md";
import { FaEnvelope, FaLock, FaCheck, FaEye } from "react-icons/fa";
import Search from "../assets/img/search.svg";



import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { config } from "../firebase_config";

const Research = () => {
  const [personData, setPersonData] = useState(null);
  const [identifiant, setIdentifiant] = useState("");


  const searchfilter = () => {
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <FirebaseDatabaseNode
        path="camera/"
        orderByKey
      >
        {(d) => {
          const data=[];
          data.push(d.value ? Object.keys(d.value).filter(v => d.value[v]?.ImagName.includes(identifiant)).map((k) => (
                <>
                </>
              ))
            : "");
          setPersonData(data);

          return (
            <React.Fragment>  
            </React.Fragment>
          );
        }}

      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>

  };


  const onHandleChange = (e) => {
    setIdentifiant(e.target.value);
  };


  const [limit, setLimit] = React.useState(1);
  const [data, setData] = React.useState([]);
  const s = (a) => JSON.stringify(a);

  return (
    <>
     
      <Container>
        <Row>
          <Col lg={4}>
            <Image src={Search} fluid className="w-100" />
          </Col>
          <Col lg={8} className="p-5 h-100">
        
              <legend className="text-center mt-0 mb-3">Aidez-nous à retrouver un enfant perdu</legend>
              <div className="field">
                <p className="control has-icons-left has-icons-right mb-1">
                  <input
                    className={`input`}
                    type="text"
                    placeholder="Identifiant"
                    onChange={onHandleChange}
                  />
                </p>
              </div>
              {identifiant}

              <div className="field row">
              <p className="control col-6 mx-auto d-grid gap-2">
                  <Button
                    variant="primary"
                    className="btn-block text-white"
                    onClick={searchfilter}
                  >
                    Rechercher
                  </Button>
                </p>
              </div>
          
           
          </Col>
        </Row>


   
{s(personData)}

      </Container>
    </>
  );
};

export default Research;
