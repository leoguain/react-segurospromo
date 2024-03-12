import React, {useState} from "react";
import "./styles.css";
import  { useAccordionData }  from "./hooks/useAccordionData";
import { AccordionItem } from "./components/AccordionItem";

export const ReasonsAccordion = () => {
  // state accordionSelected criado para controlar o abrir e fechar dos items do acordeão
  const [accordionSelected, setAccordionSelected] = useState(0);
  const accordionData = useAccordionData();

  return (
    <div className="Accordion">
      {/* Carrega os dados importados via API (useAccordionData) no Accordion  */}
      {accordionData ? (
        accordionData.map(({ id, title, content }) => (
          <AccordionItem 
            key={id} 
            id={id} 
            title={title} 
            content={content} 
            accordionSelected={accordionSelected} 
            setAccordionSelected={setAccordionSelected}
          />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div> 
  );
};
