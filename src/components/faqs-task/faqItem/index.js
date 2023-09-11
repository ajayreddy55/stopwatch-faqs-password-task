import { useState } from "react";
import "./index.css";

const FaqsItem = (props) => {
  const [isCardOpened, setIsCardOpened] = useState(false);

  const { faqDetails } = props;
  const { questionText, answerText } = faqDetails;

  const openCardShowAnswer = () => {
    setIsCardOpened(!isCardOpened);
  };

  const displayAnswer = isCardOpened ? (
    <>
      <hr className="faqs-hr-line" />
      <p className="faqs-answer-text">{answerText}</p>
    </>
  ) : (
    ""
  );

  const buttonIcon = isCardOpened
    ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
    : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png";

  const iconAltText = isCardOpened ? "minus" : "plus";

  return (
    <li className="faqs-list-item">
      <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
        <h2 className="faqs-question-text">{questionText}</h2>
        <button
          className="faqs-icon-button"
          type="button"
          onClick={openCardShowAnswer}
        >
          <img src={buttonIcon} alt={iconAltText} className="faqs-plus-icon" />
        </button>
      </div>
      {displayAnswer}
    </li>
  );
};

export default FaqsItem;
