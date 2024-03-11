import { useEffect, useState } from "react";

export const useAccordionData = () => {
  const [accordionData, setAccordionData] = useState(null);

  useEffect(() => {
    fetch("https://mocki.io/v1/f42fca53-2029-4808-b429-edf21834d002", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setAccordionData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return accordionData;
};