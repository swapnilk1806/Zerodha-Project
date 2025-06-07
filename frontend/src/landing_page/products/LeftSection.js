import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription, // fixed typo here
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-6">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-6 p-5 mt-5 mt-md-0">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a
              href={tryDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary me-3"
            >
              Try Demo
            </a>
            <a
              href={learnMore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Learn More
            </a>
          </div>
          <div>
            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a
              href={appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-4"
            >
              <img
                src="media/images/appstoreBadge.svg"
                alt="Apple App Store"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
