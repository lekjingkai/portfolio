import React from "react";
import Button from "./Button";
import "../styles/Skills.css";
import { useState, useEffect } from "react";
const Skills = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(process.env.REACT_APP_JSON_LOCATION)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.skills);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="skillContainer">
      {data && data.length > 0 ? (
        data.map((item) => (
          <Button
            key={item.id}
            btnLogoImage={require(`../assets/${item.image}`).default}
            btnName={item.name}
          ></Button>
        ))
      ) : (
        <p>No skills to show!</p>
      )}
    </div>
  );
};

export default Skills;
