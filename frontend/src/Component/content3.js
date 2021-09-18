import React from "react";
import "./content3.css";
function Content3() {
  return (
    <div>
      <section className="proudly">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="proudly-text marg">
                <h2>The exceptional</h2>
                <h2>medical care for your wellness</h2>
                <h4 className="blue">Proudly Serving Sri Lanka Since 2002</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="proudly-img ">
                <img
                  src="https://www.ceymed.lk/wp-content/themes/ceymed/images/proudly-1.png"
                  alt="RIQAS Logo"
                />
                <img
                  src="https://www.ceymed.lk/wp-content/themes/ceymed/images/proudly-2.png"
                  alt="SLBA Logo"
                />
                <img
                  src="https://www.ceymed.lk/wp-content/themes/ceymed/images/proudly-3.png"
                  alt=""
                />
                <br /> <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content3;
