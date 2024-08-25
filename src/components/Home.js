import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div>Home
    <h1 color="firebrick">{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
