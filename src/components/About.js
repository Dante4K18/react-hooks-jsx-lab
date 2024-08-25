import React from "react";
import {image} from "../data/data.js";

function About() {
  return <div id="about">About
  <h2>
    About Me
  </h2>
  <p>
    I aspire to be a great Web Developer.
  </p>
  <img src= {image} alt="I made this"/>
  </div>;
}

export default About;
