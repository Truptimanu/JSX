//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const name = "Trupti";

ReactDOM.render(
  <div>
    <h1> This is {name}</h1>
  </div>,
  document.getElementById("root")
);
