import React from "react";
import "./Styling/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        SpokoSports -{" "}
        <a href="https://www.google.com" target="__blank">
          Get Spoko Apps
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/roadsidecoder/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://piyushjsx.netlify.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
