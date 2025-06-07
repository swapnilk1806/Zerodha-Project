import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Company Logo"
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Column 1 */}
          <div className="col">
            <p>Company</p>
            <Link to="/about">About</Link>
            <br />
            <Link to="/products">Products</Link>
            <br />
            <Link to="/pricing">Pricing</Link>
            <br />
            <Link to="/referral">Referral programme</Link>
            <br />
            <Link to="/careers">Careers</Link>
            <br />
            <Link to="/zerodha-tech">Zerodha.tech</Link>
            <br />
            <Link to="/press-media">Press & media</Link>
            <br />
            <Link to="/csr">Zerodha cares (CSR)</Link>
            <br />
          </div>

          {/* Column 2 */}
          <div className="col">
            <p>Support</p>
            <Link to="/contact">Contact</Link>
            <br />
            <Link to="/support">Support portal</Link>
            <br />
            <Link to="/blog">Z-Connect blog</Link>
            <br />
            <Link to="/charges">List of charges</Link>
            <br />
            <Link to="/downloads">Downloads & resources</Link>
            <br />
          </div>

          {/* Column 3 */}
          <div className="col">
            <p>Account</p>
            <Link to="/open-account">Open an account</Link>
            <br />
            <Link to="/fund-transfer">Fund transfer</Link>
            <br />
            <Link to="/challenge">60 day challenge</Link>
            <br />
          </div>
        </div>

        {/* Legal and Risk Disclosure */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
            no.: INZ000031633 ...
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. ...
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            contact details ...
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
