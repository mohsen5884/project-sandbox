import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { FaHouse, FaIcons, FaSackDollar, FaGlobe } from "react-icons/fa6";

const ReactButtonComponnent = () => {
  const [reactButton, setReactButton] = useState("");
  const [items, setItems] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${reactButton}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [reactButton]);
  return (
    <div>
      <div className="container">
        <Title text="React Button Component" />
      </div>
      <div style={{ width: "900px", margin: "0 auto" }}>
        <div
          style={{
            marginTop: "15px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            height: "40px",
          }}
        >
          <Button
            text="Users"
            classes={"btn-primary"}
            icon={<FaHouse />}
            onClick={() => setReactButton("Users")}
          />
          <Button
            text="Posts"
            classes={"btn-success"}
            icon={<FaIcons />}
            onClick={() => setReactButton("Posts")}
          />
          <Button
            text="albums"
            classes={"btn-warning"}
            icon={<FaSackDollar />}
            onClick={() => setReactButton("albums")}
          />
          <Button
            text="comments"
            classes={"btn-info"}
            icon={<FaGlobe />}
            onClick={() => setReactButton("comments")}
          />
        </div>
        <Title
          text={!reactButton ? "Select form above!" : reactButton}
          classes={"subtitle text-primary"}
        />
        {!items
          ? null
          : items.map((item) => {
              return (
                <div className="card card-primary mb-2" key={item.id}>
                  {item.id && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && <small className="card-footer">{item.email}</small>}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ReactButtonComponnent;
