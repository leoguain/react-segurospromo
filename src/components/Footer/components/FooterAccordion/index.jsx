import React, {useState} from "react";
import "./styles.css";
import  { useFooterAccordionData }  from "./hooks/useFooterAccordionData";
import { FooterAccordionItem } from "./components/FooterAccordionItem";

export const FooterAccordion = () => {
  const [accordionSelected, setAccordionSelected] = useState("1");
  const footerAccordionData = useFooterAccordionData();

  return (
    <div className="FooterAccordion_Container">
      {footerAccordionData  ? (
        footerAccordionData.map(({ id, title, content }) => (
          <FooterAccordionItem key={id} id={id} title={title} content={content} accordionSelected={accordionSelected} setAccordionSelected={setAccordionSelected}/>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div> 
  );
};
