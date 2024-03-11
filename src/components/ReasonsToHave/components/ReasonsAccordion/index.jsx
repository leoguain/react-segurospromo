import React, {useState} from "react";
import "./styles.css";
import  { useAccordionData }  from "./hooks/useAccordionData";
import { AccordionItem } from "./components/AccordionItem";

export const ReasonsAccordion = () => {
  const [accordionSelected, setAccordionSelected] = useState(0);
  const accordionData = useAccordionData();

  return (
    <div className="Accordion">
      {accordionData ? (
        accordionData.map(({ id, title, content }) => (
          <AccordionItem key={id} id={id} title={title} content={content} accordionSelected={accordionSelected} setAccordionSelected={setAccordionSelected}/>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div> 
  );
};
