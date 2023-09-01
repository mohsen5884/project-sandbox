import React, { useState, useEffect } from "react";
import Button from "./Button";

const Alert = ({ type, Message, delay = false, delayTime = 3000 }) => {
  const [showAlert, setShowAlert] = useState(true);
  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("fade");

    setTimeout(() => {
      setShowAlert(false);
    }, 300);
  };

  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, delayTime);
  });
  return (
    showAlert && (
      <div className={`alert alert-${type} alert-dismissible`}>
        <div className="alert-close">
          <span className="mr-1">{Message}</span>
          <Button text=" " classes={"btn-close"} onClick={closeAlert} />
        </div>
      </div>
    )
  );
};

export default Alert;
