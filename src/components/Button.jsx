import React from "react";

const Button = ({ text, classes, icon, onClick }) => {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>
      {icon} {!text ? "Click" : text}
    </button>
  );
};

export default Button;
