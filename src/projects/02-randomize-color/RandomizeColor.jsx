import React from "react";
import Title from "../../components/Title";

const RandomizeColor = () => {
  const handleOneClick = (one) => {
    document.body.style.backgroundColor =getRandomColor();
    one.target.style.backgroundColor =getRandomColor();
     
  };
  const handleTwoClick = (two) => {
    let body = document.querySelector('body');
    body.style.backgroundColor =getRandomColor();
    two.target.style.backgroundColor =getRandomColor();
  };
  const handleThreeClick = (three) => {
    console.log(three.target)
  };
  const handleFourClick = (four) => { 
    console.log(four.target)
  };
  function getRandomColor() {
    let letters ="0123456789ABCDEF";
    let color="#";
    for (let i = 0; i <6 ; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
  }
  return (
    <div>
      <Title text={"Randomize Color"} className="mb-4" />
      <div className="btn-container">
        <button className="btn btn-danger" onClick={(one) => handleOneClick(one)}>
          Click One
        </button>
        <button className="btn btn-success" onClick={(two) => handleTwoClick(two)}>Click Two</button>
        <button className="btn btn-info" onClick={(three) => handleThreeClick(three)}>Click Three</button>
        <button className="btn btn-primary" onClick={(four) => handleFourClick(four)}>Click Four</button>
      </div>
    </div>
  );
};

export default RandomizeColor;
