import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import "./Accordion.css"

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="label-icon">
          <span className="label">{title}</span>
          <span>
            {isOpen ? (
              <AiOutlineMinus style={{ color: "black" }} size="1rem" />
            ) : (
              <AiOutlinePlus style={{ color: "black" }} size="1rem" />
            )}
          </span>
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
