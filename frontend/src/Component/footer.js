import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 con">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">TEYmed health care services</h5>
            <p className="f1">
              All our health services require appointments.
              <br /> Need help booking...?
              <br /> <b>Channel Your Doctor Now</b>
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact Now </h5>
            <ul>
              <li className="list-unstyled">+94-114-555 444</li>
              <li className="list-unstyled">info@teymed.lk</li>
              <li className="list-unstyled"></li>
              <li className="list-unstyled"></li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Teymed
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
