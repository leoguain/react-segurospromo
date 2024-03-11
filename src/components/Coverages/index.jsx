import React from "react";
import "./styles.css";
import { CoverageCard } from "./components/CoverageCard";
import { QuoteButton } from "../QuoteButton";
import { useCoverages } from "../../hooks/useCoverages";

export const Coverages = ({title, subText}) => {
  const { coverages } = useCoverages();

  return (
    <section className="Coverages_Container">
      <h2>{title}</h2>
      <span className="Coverages_Message">{subText}</span>
      <div className="Coverages_SubContainer">
      {coverages.map(({ id, title, description, logoPath, logoAlt }) => (
        <CoverageCard 
        key={id}
        iconSrc={logoPath} 
        iconAlt={logoAlt} 
        title={title}
        description={description} />
      ))}
      </div>
      <QuoteButton />
    </section>
  );
};
