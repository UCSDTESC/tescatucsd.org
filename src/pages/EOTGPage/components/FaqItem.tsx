import React, { useState } from "react";
import "./Faq.css";

interface FaqItemProps {
  idx: number;
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ idx, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="panel-group"
      id="accordion"
      role="tablist"
      aria-multiselectable="true"
    >
      <div className="panel panel-default eotg-question">
        <div className="panel-heading" id={`heading-${idx}`} role="tab">
          <div className="panel-title eotg-question__heading">
            <button
              className={`w-100 d-inline-flex flex-wrap justify-content-center ${
                isOpen ? "" : "collapsed"
              }`}
              onClick={toggleCollapse}
              aria-expanded={isOpen}
              aria-controls={`collapse-${idx}`}
              style={{
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <span className="mx-auto eotg-question__color">{question}</span>
              <span className="question__icon">{isOpen ? "-" : "+"}</span>
            </button>
          </div>
        </div>
        <div
          className={`panel-collapse collapse eotg-question__content ${
            isOpen ? "show" : ""
          }`}
          id={`collapse-${idx}`}
          role="tabpanel"
          aria-labelledby={`heading-${idx}`}
        >
          <div className="panel-body">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
