import React from "react";
import "./styles.css";

export const FooterAccordionItem = ({id, title, content, accordionSelected, setAccordionSelected}) => {
  
  return (
    <div 
      className="FooterAccordion_Item"
      onClick={() => setAccordionSelected(accordionSelected !== id ?id:0)}
    >
      {/* Trigger do Accordion */}
      <div 
        className="FooterAccordion_Title">
        <div>{title}</div>
        <div className="Title_Icon">
          <img src={`/assets/icons/${accordionSelected ===id ? 
                      "chevron-up-footer" : 
                      "chevron-down-footer"
                    }.png`} alt=""/>
        </div>
      </div>
      {/* Carrega o content do Item  */}
      {accordionSelected === id && (
        <div className="FooterAccordion_Content">
          {content &&
            content.map(({ id, title, href }) => (
              <a key={id} href={href}>
                {title}
              </a>
            ))}
        </div>
      )}
    </div>
  );
};
