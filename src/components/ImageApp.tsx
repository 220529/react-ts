import React from "react";
import bImg from "../assets/b.png";
import sImg from "../assets/s.png";

function App() {
  return (
    <div>
      <img src={sImg} alt="小于10kb的图片" />
      <img src={bImg} alt="大于于10kb的图片" />
      <div className="smallImg"></div>
      <div className="bigImg"></div>
    </div>
  );
}
export default App;
