import React from "react";
import { image } from "../data/data";

function About() {
  return <div id= "about">
    <h2>About Me</h2>
    <p>Am so passionate in programming I hope to be a software developer one day</p>
    <img
    src={image}
    alt="I made this"
    />
  </div>;
}

export default About;
