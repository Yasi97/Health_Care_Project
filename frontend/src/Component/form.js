import React, { useState } from "react";
import "./form.css";

function Form() {
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newData = {
      email,
      nic,
    };
    console.log(newData);
  }

  return (
    <div className="bg1-img">
      <div className="row">
        <div className="justify-content-center align-items-center">
          <div class="d-grid gap-2 col-3 mx-auto">
            <form
              action="/action_page.php"
              className="container"
              onSubmit={sendData}
            >
              <h1>Covid vaccination</h1>
              <br />

              <div>
                <label for="email">
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <br />

              <div>
                <label for="psw">
                  <b>NIC</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter National ID No"
                  name="text"
                  required
                  onChange={(e) => {
                    setNic(e.target.value);
                  }}
                />
              </div>
              <br />

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
