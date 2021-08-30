import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGreaterThanEqual, FaLessThanEqual } from "react-icons/fa";

//import AirData from "./../data/airquality.json";

import co2 from "./../assets/img/co2-symbol.svg";
import airq from "./../assets/img/airq-symbol.svg";
import humidity from "./../assets/img/humidity-symbol.svg";
import temp from "./../assets/img/temp-symbol.svg";
import industry from "./../assets/img/industry-symbol.svg";
import smoke from "./../assets/img/smoke-symbol.svg";

import pin from "./../assets/img/pin.svg";
import rabat from "./../assets/img/rabat.svg";
import spacebar from "./../assets/img/spacebar.svg";
import { markerIcon } from "../helpers/utils";

import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { config } from "../firebase_config";

/*Missing:
Center elements 
Add a nice container for the search bar

geocoding
map legend 
get the brackets for the value
re-organize the popup better
have custom markers
*/

const Map = () => {
  const s = (a) => JSON.stringify(a);


  const [AirData, setAirData] = useState(null);

  const [airQualityData, setAirQualityData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [path, setPath] = React.useState("IOT/");
  const [searchby, setSearchby] = React.useState("CO");
  const [inputby, setInputby] = useState("");
  const [inputto, setInputto] = useState("");
  const [color, setColor] = React.useState("white");
  

  const [filteredmonitors, setFilteredMonitors] = useState(
    AirData?.filter((air) => air.city === "Rabat")
  );

  const searchfilter = () => {
    setFilteredMonitors(
      AirData.filter(
        (air) => air[searchby] >= inputby && air[searchby] <= inputto
      )
    );
  };

  const onHandleChange = (e) => {
    setInputby(e.target.value);
  };

  const onHandleChange2 = (e) => {
    setInputto(e.target.value);
  };

  var placeholderSearchTextSUP = {
    CO: "Taux de Co2 supérieur",
    smoke: "Taux de fumée supérieur",
    airquality: "Valeur de qualité de l'air supérieure",
    LPG: "Taux de GPL supérieur",
    T: "Température supérieure",
    H: "Taux d'humidité supérieur",
  };

  var placeholderSearchTextINF = {
    CO: "Taux de Co2 inférieur",
    smoke: "Taux de fumée inférieur",
    airquality: "Valeur de qualité de l'air inférieur",
    LPG: "Taux de GPL inférieur",
    T: "Température inférieure",
    H: "Taux d'humidité inférieur",
  };

  var placeholderSearchIco = {
    CO: co2,
    smoke: smoke,
    airquality: airq,
    LPG: industry,
    T: temp,
    H: humidity,
  };

  var rankingsColor = {
    good: "gradientlightgreen",
    moderate: "gradientblue",
    sensitive: "gradientyellow",
    unhealthy: "gradientred",
    hazardous: "gradientcrimsonred",
  };

  function rankCO(CoMq7) {
    var str = CoMq7;
    var CoMq7 = str.replace(/\D/g, "");

    if (CoMq7 < 36) {
      return "gradientlightgreen";

    } else if ( CoMq7 >= 36 && CoMq7 <= 200) {
      return "gradientblue";

    } else if(CoMq7 > 200 && CoMq7 <= 400) {
      return "gradientyellow";

    }else if(CoMq7 > 400 && CoMq7 <= 800) {
      return "gradientred";

    }else if(CoMq7 > 800 && CoMq7 <= 3200) {
      return "gradientcrimsonred";

    }else {
      return "gradientcrimsonred";
    }

  }

  function rankAQ(AirMQ135) {
    var str = AirMQ135;
    var AirMQ135 = str.replace(/\D/g, "");

    if (AirMQ135 < 50) {
      return "gradientlightgreen";

    } else if (AirMQ135 >= 51 && AirMQ135 <= 100) {
      return "gradientblue";

    } else if(AirMQ135 >= 101 && AirMQ135 <= 150){
      return "gradientyellow";
      
    }else if (AirMQ135 >= 151 && AirMQ135 <= 200) {
      return "gradientred";

    } else if(AirMQ135 >= 201 && AirMQ135 <= 300){
      return "gradientcrimsonred";
      
    }else{
      return "gradientcrimsonred";

  } }

  function rankLPG(lpg) {
      return "gradientcrimsonred";
  }

  function rankSmoke(smoke) {
    var str = smoke;
    var smoke = str.replace(/\D/g, "");

    if (smoke < 51) {
      return "gradientlightgreen";

    } else if (smoke >= 51 && smoke <= 100) {
      return "gradientblue";

    }else if (smoke >= 101 && smoke < 151) {
      return "gradientyellow";

    }else if (smoke >= 151 && smoke <= 200) {
      return "gradientred";

    }else if (smoke >201 && smoke <= 300) {
      return "gradientcrimsonred";
      
    }else{
      return "gradientcrimsonred";

  }
  }

  return (
    <>
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <FirebaseDatabaseNode
        path="IOT/"
        orderByKey
      >
        {(d) => {
          const data=[];
          data.push(d);
          setAirData(data);
          return (
            <React.Fragment>
            </React.Fragment>
          );
        }}

      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
    
      <Container fluid>
        <Row className="my-3">
          <Col lg={2} className="my-3 my-md-3 my-lg-0">
            <img src={pin} alt="PIN" align="middle" width="40%" />
            <img src={rabat} alt="Rabat" width="60%" />
          </Col>
          <Col lg={1}></Col>
          <Col lg={5} className="d-inline-flex my-5 my-lg-0">
            <div className="iconthemebluebackground">
              <img
                src={placeholderSearchIco[searchby]}
                alt="Small Icon"
                align="center"
                className="pin"
              />
            </div>
            <select
              className="form-select select"
              value={searchby}
              onChange={(e) => {
                const searchby = e.target.value;
                setSearchby(searchby);
              }}
            >
              <option value="CO">Taux de CO2</option>
              <option value="smoke">Taux de Fumée</option>
              <option value="airquality">Qualité de l'air</option>
              <option value="T">Température</option>
              <option value="LPG">Taux de GPL</option>
              <option value="H">Taux de l'humidité</option>
            </select>
          </Col>
          <Col lg={2} className="h-100 my-auto">
            <p className="control has-icons-left has-icons-right mb-1">
              <input
                id="inputBox-by"
                className={`input`}
                type="text"
                onChange={onHandleChange}
                placeholder={placeholderSearchTextSUP[searchby]}
                value={inputby}
              />

              <span className="icon is-small is-left">
                <FaLessThanEqual />
              </span>
            </p>

            <p
              className="control has-icons-left has-icons-right mb-1"
              height="120vh"
              width="500vw"
            >
              <input
                id="inputBox-to"
                type="text"
                className={`input`}
                onChange={onHandleChange2}
                placeholder={placeholderSearchTextINF[searchby]}
                value={inputto}
              />

              <span className="icon is-small is-left">
                <FaGreaterThanEqual />
              </span>
            </p>
          </Col>
          <Col lg={2} className="h-100 my-auto d-grid gap-2 d-md-block">
            <Button
              variant="primary"
              className="btn-block text-white"
              type="submit"
              onClick={searchfilter}
            >
              Rechercher
            </Button>
          </Col>
        </Row>

        <Row>
          <Col lg={10} sm={12} className="mx-auto">
            <MapContainer
              center={[33.969199, -6.927303]}
              zoom={12}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              { AirData?.map((air) => (
                 
                 (air.value?.Latitude && air.value?.Longitude) ?
                 <Marker
                   key={air.value?.ID}
                   position={[air.value?.Latitude, air.value?.Longitude]}
                   icon={markerIcon()}
                 >
                   <Popup>
                     <div className="float-container">
                        <div className="float-child">
                            <div
                              className="background"
                              style={{ background: `${color}` }}
                            >
                            <img
                              src={airq}
                              alt="Air Quality"
                              id={rankAQ(air.value?.AirQuality)}
                            />
                            </div>
                            <br />
                            <b>Qualité de l'air</b> <br />
                            {air.value?.AirQuality}
                        </div>

                      <div className="float-child">
                        <div
                          className="background"
                          style={{ background: `${color}` }}
                        >
                          <img src={co2} 
                          alt="CO2" 
                          id={rankCO(air.value?.CO)} />
                        </div>
                        <br />
                        <b>Taux de CO</b> <br />
                        {air.value?.CO} 
                      </div>

                      <div className="float-child">
                        <div
                          className="background"
                          style={{ background: `${color}` }}
                        >
                          <img
                            src={industry}
                            alt="Industry"
                            id={rankLPG(air.value?.LPG)}
                          />
                        </div>
                        <br />
                        <b>Taux de GPL</b> <br />
                        <i>(Gaz de pétrole liquéfié)</i>
                        <br />
                        {air.value?.LPG} 
                      </div>

                      <div className="float-child">
                        <div
                          className="background"
                          style={{ background: `${color}` }}
                        >
                          <img
                            src={smoke}
                            alt="Smoke"
                            id={rankSmoke(air.value?.smoke)}
                          />
                        </div>
                        <br />
                        <b>Taux de Fumée</b> <br />
                        {air.value?.smoke} 
                      </div>

                      <div className="float-child">
                        <div className="themebluebackground">
                          <img src={humidity} alt="Humidity" />
                        </div>
                        <br />
                        <b>Taux de l'humidité</b> <br />
                        {air.value?.H} 
                      </div>

                      <div className="float-child">
                        <div className="themebluebackground">
                          <img src={temp} alt="Temperature" />
                        </div>
                        <br />
                        <b>Température</b> <br />
                        {air.value?.T} 
                      </div>
                     </div>
                   </Popup>
                 </Marker> : ''

                ))}
            </MapContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Map;
