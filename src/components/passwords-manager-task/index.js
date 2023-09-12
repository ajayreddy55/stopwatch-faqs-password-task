import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PasswordsItem from "./passwordsItem";

import "./index.css";

const logoColorsList = [
  "#f59e0b",
  "#10b981",
  "#f97316",
  "#14b8a6",
  "#b91c1c",
  "green",
  "#333333",
];

const PasswordManager = () => {
  const [passwordsList, setPasswordsList] = useState([]);
  const [webisteName, setWebsiteName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isShowPasswordChecked, setIsShowPasswordChecked] = useState(false);

  const changeToWebInput = (event) => {
    setWebsiteName(event.target.value);
  };

  const changeToUserInput = (event) => {
    setUserName(event.target.value);
  };

  const changeToPasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const changeTheSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const toggleTheStatusChecked = () => {
    setIsShowPasswordChecked(!isShowPasswordChecked);
  };

  const submitTheDetailsOfInputs = (event) => {
    event.preventDefault();

    if (webisteName !== "" && userName !== "" && password !== "") {
      const randomColorIndex =
        Math.ceil(Math.random() * logoColorsList.length) - 1;
      const randomLogoBackGround = logoColorsList[randomColorIndex];

      const passwordsDetailsObject = {
        id: uuidv4(),
        webisteName,
        userName,
        password,
        randomLogoBackGround,
      };
      setPasswordsList((prevList) => [...prevList, passwordsDetailsObject]);
      setWebsiteName("");
      setUserName("");
      setPassword("");
    }
  };

  const deleteThePassword = (id) => {
    setPasswordsList((prevList) =>
      prevList.filter((eachItem) => eachItem.id !== id)
    );
  };

  const getFilteredList = () => {
    return passwordsList.filter((eachItem) =>
      eachItem.webisteName.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const filteredList = getFilteredList();
  const listLength = filteredList.length;

  const displayNoPasswordsOrList = () => {
    if (listLength === 0) {
      return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="passwords-no-image"
          />
          <p className="passwords-no-text">No Passwords</p>
        </div>
      );
    }
    return (
      <ul className="passwords-list-container">
        {filteredList.map((eachItem) => (
          <PasswordsItem
            key={eachItem.id}
            itemDetails={eachItem}
            isShowPasswordChecked={isShowPasswordChecked}
            deleteThePassword={deleteThePassword}
          />
        ))}
      </ul>
    );
  };

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
              <form
                className="passwords-inputs-card col-12 col-md-6"
                onSubmit={submitTheDetailsOfInputs}
              >
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
                    value={webisteName}
                    onChange={changeToWebInput}
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
                    value={userName}
                    onChange={changeToUserInput}
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
                    value={password}
                    onChange={changeToPasswordInput}
                  />
                </div>
                <div className="align-self-end mt-3 mb-2">
                  <button className="btn btn-primary" type="submit">
                    Add
                  </button>
                </div>
              </form>
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
        <div className="passwords-displaying-main-card">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between flex-wrap mt-2 mb-3">
                  <div className="d-flex align-items-center">
                    <h2 className="passwords-display-heading">
                      Your Passwords
                    </h2>
                    <div className="passwords-count-container">
                      <p className="passwords-count-number">{listLength}</p>
                    </div>
                  </div>
                  <div className="passwords-search-bar-container">
                    <div className="passwords-search-bar-logo-container">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                        alt="search"
                        className="passwords-search-logo"
                      />
                    </div>
                    <input
                      className="passwords-search-bar"
                      placeholder="Search"
                      type="search"
                      value={searchInput}
                      onChange={changeTheSearchInput}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <hr className="passwords-display-hr-line" />
              </div>
              <div className="col-12">
                <div className="passwords-show-container">
                  <input
                    type="checkbox"
                    className="passwords-show-checkbox"
                    checked={isShowPasswordChecked}
                    onChange={toggleTheStatusChecked}
                    id="passwordsShowCheckbox"
                  />
                  <label
                    className="passwords-show-password-text"
                    htmlFor="passwordsShowCheckbox"
                  >
                    Show Passwords
                  </label>
                </div>
              </div>
              <div className="col-12">{displayNoPasswordsOrList()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordManager;
