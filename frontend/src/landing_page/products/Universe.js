import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-12">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        {/* Partner cards */}
        {Array(6).fill(0).map((_, index) => (
          <div key={index} className="col-12 col-md-4 p-3 mt-5">
            <img
              src="media/images/smallcaseLogo.png"
              alt="Smallcase Logo"
              className="img-fluid"
            />
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
        ))}

        {/* Signup button */}
        <div className="col-12">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto", display: "block" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
