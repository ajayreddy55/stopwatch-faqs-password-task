import { useState } from "react";

import "./index.css";

const PasswordManager = () => {
  return (
    <div className="password-bg-container">
      <div className="password-main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="passwords-app-logo"
        />
        <div className="passwords-inputs-image-main-card">
          <div className="container-fluid">
            <div className="row passwords-inputs-row-card">
              <div className="d-md-none col-12 text-center mb-3 mt-3">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                  alt="password manager"
                  className="w-100"
                />
              </div>
              <div className="passwords-inputs-card col-12 col-md-6">
                <h1 className="passwords-add-inputs-heading">
                  Add New Password
                </h1>
                <div className="passwords-input-container">
                  <div className="passwords-input-website-logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="passwords-input-website-logo"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="passwords-input-webiste-element"
                  />
                </div>
                <div className="passwords-input-container">
                  <div className="passwords-input-website-logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="passwords-input-website-logo"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="passwords-input-webiste-element"
                  />
                </div>
                <div className="passwords-input-container">
                  <div className="passwords-input-website-logo-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="passwords-input-website-logo"
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="passwords-input-webiste-element"
                  />
                </div>
              </div>
              <div className="d-none d-md-flex col-md-5 text-center align-items-center">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                  alt="password manager"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordManager;
