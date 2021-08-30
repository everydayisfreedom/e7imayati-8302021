import React from "react";

import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { config } from "../firebase_config";


const DatabaseList = () => {
  const s = (a) => JSON.stringify(a);
  const [AirData, setAirData] = React.useState([]);
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <FirebaseDatabaseNode
        path="IOT/"
        orderByKey
      >
        
        {(d) => {
          //setAirData([...AirData, d]);
          console.log(d);
          return (
            <React.Fragment>
              <pre>Path {d.path}
              
              </pre>

              <pre style={{ height: 300, overflow: "auto" }}>

               {s(d.value)}

               Value {d.value ? s(d.value["AirQuality = "]) : ""}
              
              </pre>
            </React.Fragment>
          );
        }}

      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
  );
};

export default DatabaseList;