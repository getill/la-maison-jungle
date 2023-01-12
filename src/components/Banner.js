import React from "react";
import "../styles/banner.css";
import logo from "../assets/logo.png";

const Banner = () => {
  return (
    <div className="lmj-banner">
      <img src={logo} alt="logo" className="lmj-logo" />
      <h1>La maison jungle</h1>
    </div>
  );
};

export default Banner;
