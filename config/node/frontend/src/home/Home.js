import React from "react";
import "./Home.css";
import zdjecie from "./01_mapa_wat.png";

function Home() {
  return (
    <div>
      <div className="home_top">
        <div>O projekcie</div>
      </div>
      <div className="home_bottom">
        <div className="home_left">
          <ing className="home_logo" src={zdjecie} alt="logo" />
        </div>
        <div className="home_right">
          <h1 className="home_title">
            <spam style={{ color: "#276cd3", opacity: "0.75" }}>GEO</spam>Portal
          </h1>
          <div className="home_subtitle">
            Strona internetowa z interaktywną mapą
          </div>
          <button className="home_button">WCHODZĘ!</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
