import React, { useState } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";

const TempetureApp = () => {
  const [tempeture, setTempeture] = useState(0);
  const minuesTempeture = () => {
    setTempeture(tempeture - 1);
  };
  const addTempeture = () => {
    setTempeture(tempeture + 1);
  };
  return (
    <div>
      <div>
        <Title text="Tempeture App" />
      </div>
      <div
        style={{
          width: "200px",
          height: "250px",
          padding: "15px 0 20px 0",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "0 auto",
        }}
      >
        <div
          className={tempeture > 0 ? "bg-danger" : "bg-info"}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            margin: "0 auto",
            border: "2px black solid",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2 style={{ alignSelf: "center", color: "white" }}>
            {tempeture}
            <span style={{ margin: "0 5px" }}>&#8451;</span>
          </h2>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <Button
            text={"-"}
            classes={"btn-primary"}
            onClick={minuesTempeture}
          />
          <p style={{ margin: "5px" }}></p>
          <Button text={"+"} classes={"btn-primary"} onClick={addTempeture} />
        </div>
      </div>
    </div>
  );
};

export default TempetureApp;
