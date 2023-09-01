import React from "react";
import Alert from "../../components/Alert";

const AlertApp = () => {
  return (
    <div>
      <Alert type={"success"} Message="Create Successful" />
      <Alert type={"danger"} Message="Login failed" />
      <Alert type={"info"} Message="Time Triggered" delay={true} />
    </div>
  );
};

export default AlertApp;
