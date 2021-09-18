import React from "react";
import "./content1.css";
function Content1() {
  return (
    <div>
      <section className="report-intro bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 marg">
              <h2>Laboratory Testing</h2>
              <p>
                TEYmed serves you with the latest technology <br />
                in the industry to detect your illness.
                <br /> With the professionalism gained, our pathologists <br />
                and laboratory scientists are pledged to excellence in
                <br />
                biochemistry, microbiology and genetics.
              </p>
              <p>
                <strong>Dedicated to heal you with care</strong>
              </p>
            </div>
            <div className="col-sm-6">
              <div className="report-intro-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyOd032Z2zMqA9EnktDmxo1kggjveUNruFEInQSsNvIQRpYK_6jHargvKBOsBZVw8Iv4&usqp=CAU"
                  alt="Laboratory testing Sri Lanka"
                />
                <br />
                <br />
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

export default Content1;
