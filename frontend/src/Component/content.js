import React from "react";
import "./content.css";

function Content() {
  return (
    <div>
      <div className="w3-container w3-center w3-animate-fading para">
        <h1 style={{ textAlign: "right" }}>
          <b> Your health is</b>
        </h1>
        <p style={{ textAlign: "right", fontSize: "10" }}>
          <b>
            {" "}
            Our {"    "}
            <br /> Responsibility <br />
          </b>
        </p>
      </div>
      <div>
        <h1
          className=" w3-animate-bottom para1 text-block"
          style={{ textAlign: "right", fontSize: "6" }}
        >
          EXPERIENCE, PRECISION & <br /> EXPERTISE HEALTHCARE{" "}
        </h1>
      </div>
    </div>
  );
}
export default Content;
