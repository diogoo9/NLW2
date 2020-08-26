import React from "react";

import stydyIcon from "../../assets/inages/icons/study.svg";
import giveClassesIcon from "../../assets/inages/icons/give-classes.svg";
import purpleHeart from "../../assets/inages/icons/purple-heart.svg";
import logoImg from "../../assets/inages/logo.svg";
import LandingImg from "../../assets/inages/landing.svg";

import "./styles.css";

const Landing = () => {
  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>sua plataforma de estudos!</h2>
        </div>

        <img src={LandingImg} alt="" className="hero-image" />
        <div className="buttons-container">
          <a href="/study" className="study">
            <img src={stydyIcon} alt="estudar" />
            Estudar
          </a>
          <a href="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="estudar" />
            Estudar
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeart} alt="coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
