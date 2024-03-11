import React from "react";
import "./styles.css";

export const AccordionItem = ({id, title, content, accordionSelected, setAccordionSelected}) => {
  
  return (
    <div 
      className="Accordion_Item"
      onClick={() => setAccordionSelected(accordionSelected !== id ?id:0)}>
      <div className="Accordion_Title">
        <span>{title}</span>
        <div className="Title_Icon">
          <img src={`/assets/icons/${accordionSelected ===id ? 
                      "chevron-up" : 
                      "chevron-down"
                    }.png`} alt=""/>
        </div>
      </div>
      {accordionSelected === id && <div className="Accordion_Content">{content}</div>}
    </div>
  );
};
