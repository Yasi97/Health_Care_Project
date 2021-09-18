import React, { useState } from "react";
import "./display.css";
import axios from "axios";
import Button from "./button";
import Forms from "./forms";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Presenter from "./animation";
//import Animation from "./animation";
import Footer from "./footer";
import Content from "./content";
import SwipeableTextMobileStepper from "./slides";
import Content1 from "./content1";
import Content2 from "./content2";
import Reg from "./reg";
import Content3 from "./content3";

function Display() {
  return (
    <Router>
      <div>
        <div className="bg-img">
          <div className="row">
            <div>
              <Route path="/" exact component={Content} />
              <Route path="/register" exact component={Reg} />
              <Route path="/add" exact component={Forms} />
            </div>
          </div>
        </div>
        <div className="row back">
          <div className="col-sm-6">
            <Route path="/" exact component={Button} />
          </div>
          <div className="col-sm-6">
            <br />
            <br />
            <br />
            <Route path="/" exact component={SwipeableTextMobileStepper} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="row back">
          <br />
          <br />
          <Route path="/" exact component={Content1} />
          <br />
        </div>

        <div className="row back">
          <Route path="/" exact component={Content2} />
          <br />
        </div>

        <div className="row back">
          <Route path="/" exact component={Content3} />
          <br />
        </div>

        <div className="row back">
          <br />
          <br />
          <Route path="/" exact component={Footer} />
        </div>
      </div>
    </Router>
  );
}

export default Display;
