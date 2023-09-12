import "./index.css";

const PasswordsItem = (props) => {
  const { itemDetails, isShowPasswordChecked, deleteThePassword } = props;
  const { id, webisteName, userName, password, randomLogoBackGround } =
    itemDetails;
  const logoLetter = webisteName.slice(0, 1).toUpperCase();

  const displayPasswordOrStarImage = isShowPasswordChecked ? (
    <p className="passwords-text-password-list">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="passwords-list-stars-image"
    />
  );

  const deletePassword = () => {
    deleteThePassword(id);
  };

  return (
    <li className="passwords-list-item-container">
      <div className="d-flex align-items-center">
        <div
          className="passwords-list-logo-container"
          style={{ backgroundColor: randomLogoBackGround }}
        >
          <h3 className="passwords-list-logo">{logoLetter}</h3>
        </div>
        <div className="d-flex flex-column ml-2">
          <p className="passwords-list-website-name">{webisteName}</p>
          <p className="passwords-list-user-name">{userName}</p>
          {displayPasswordOrStarImage}
        </div>
      </div>
      <button
        className="passwords-list-delete-icon-button"
        onClick={deletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="passwords-list-delete-icon"
        />
      </button>
    </li>
  );
};

export default PasswordsItem;
