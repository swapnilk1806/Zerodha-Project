import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6 p-5 mt-5 mt-md-0">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a
              href={learnMore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt={productName || "Product image"} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
