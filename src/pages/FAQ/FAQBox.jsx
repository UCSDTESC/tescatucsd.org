import React, { useState, useRef, useEffect } from 'react';
import './FAQBox.css';

const FAQBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <div className="faq-box">
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </div>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{ height }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQBox;
