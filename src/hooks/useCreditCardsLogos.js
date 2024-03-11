export const useCreditCardsLogos = () => {
  const pathCreditCardsLogos = "/assets/credit-cards/";
  const creditCardsLogos = [
    {
      id: "master",
      path: pathCreditCardsLogos + "master.png",
      alt: "Logo Master Card",
    },
    {
      id: "visa",
      path: pathCreditCardsLogos + "visa.png",
      alt: "Logo Visa",
    },
    {
      id: "amex",
      path: pathCreditCardsLogos + "amex.png",
      alt: "Logo Amex",
    },
    {
      id: "elo",
      path: pathCreditCardsLogos + "elo.png",
      alt: "Logo Elo",
    },
    {
      id: "diners",
      path: pathCreditCardsLogos + "diners.png",
      alt: "Logo Diners",
    },
    {
      id: "hyper",
      path: pathCreditCardsLogos + "hyper.png",
      alt: "Logo Hyper",
    },
  ];

  return {
    creditCardsLogos,
  };
};
