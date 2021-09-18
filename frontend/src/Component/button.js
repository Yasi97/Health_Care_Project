import React from "react";
import "./button.css";
function button() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div class="d-grid gap-2 col-3 mx-auto back ">
        <a href="">
          <button class="btn btn-secondary butn" type="button">
            Meet your doctor
          </button>
        </a>
        <br />
        <br />
        <a href="/add">
          <button class="btn btn-secondary butn" type="button">
            Covid vaccination
          </button>
        </a>
        <br />
        <br />
        <a href="/register">
          <button class="btn btn-secondary butn" type="button">
            Doctor registration
          </button>
        </a>
      </div>
    </div>
  );
}

export default button;
