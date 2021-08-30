import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image, Table } from "react-bootstrap";

import search from "../assets/img/search.svg";
import fire from "../firebase_realtime_db";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [fireData, setFireData] = useState(null);

  const onHandleChange = (e) => {
    setSearchText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let messageRef = fire
      .database()
      .ref("camera/")
      .orderByKey()
      .limitToLast(100);
    messageRef.on("value", (data) => {
      // do some stuff once
      console.table(data.val());

      const filteredResult = Object.keys(data.val())
        .filter((fd) => data.val()[fd]?.ImagName.includes(searchText))
        .map((k) => {
          return {
            key: k,
            value: data.val()[k],
          };
        });
      setFireData(filteredResult);
      console.table(filteredResult.map((f) => f.value));
    });
    console.log(messageRef);
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={4}>
            <Image src={search} fluid className="w-100" />
          </Col>
          <Col lg={8} className="p-5 h-100">
            <legend className="text-center mt-0 mb-3">
              Retrouver une personne
            </legend>
            <div className="field">
              <p className="control has-icons-left has-icons-right mb-1">
                <input
                  className={`input`}
                  type="text"
                  placeholder="Entrez un identifiant"
                  onChange={onHandleChange}
                />
              </p>
            </div>

            <div className="field row">
              <p className="control col-6 mx-auto d-grid gap-2">
                <Button
                  variant="primary"
                  className="btn-block text-white"
                  onClick={onSubmit}
                >
                  Rechercher
                </Button>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <br/>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Date</th>
                  <th>IdeCam</th>
                  <th>Image Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {fireData?.map((data) => 
                      <tr>
                      <td><b>{data.key}</b></td>
                      <td>{data.value.Date}</td>
                      <td>{data.value.IdeCam}</td>
                      <td>{data.value.ImagName}</td>
                      <td>{data.value.Status}</td>

                    </tr>
                )}
              
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Search;
