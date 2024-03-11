import React from "react";
import "./styles.css";
import { QuoteButton } from "../QuoteButton";
import { ReasonsAccordion } from "./components/ReasonsAccordion";

export const ReasonsToHave = ({title}) => {
  return (
    <section className="ReasonsToHave_Container">
      <div className="ReasonsToHave_Title">
        <h2>{title}</h2>
      </div>
        <div className="ReasonsToHave_SubLeftContainer">
          <ReasonsAccordion />
        </div>
        <div className="ReasonsToHave_SubRightContainer">
          <img src="/assets/couple.png" alt="Casal comemorando" width="80%" />
        </div>
        <div className="ReasonsToHave_Button">
        <QuoteButton />
        </div>
      
    </section>   
  );
};

/*
import React from "react";
import "./styles.css";
import { QuoteButton } from "../QuoteButton";
import { ReasonsAccordion } from "./components/ReasonsAccordion";

export const ReasonsToHave = ({title}) => {
  return (
    <section className="ReasonsToHave_Container">
      <h2>{title}</h2>
      <div className="ReasonsToHave_SubContainer">
        <div className="ReasonsToHave_SubLeftContainer">
          <ReasonsAccordion />
        </div>
        <div className="ReasonsToHave_SubRightContainer">
          <img src="/assets/couple.png" alt="Casal comemorando" width="80%" />
        </div>
      </div>
      <QuoteButton />
    </section>   
  );
};


*/