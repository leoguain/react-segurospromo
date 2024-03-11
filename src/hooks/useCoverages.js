export const useCoverages = () => {
  const pathCoverageLogos = "/assets/icons/";
  const coverages = [
    {
      id: "1",
      title: "Morte",
      description:
        "Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado.",
      logoPath: pathCoverageLogos + "angel.png",
      logoAlt: "Angel Icon",
    },
    {
      id: "2",
      title: "Invalidez por acidente",
      description:
        "Caso a pessoa segurada sofra um acidente que a torne permanentemente inválida, seja total ou parcialmente, essa pessoa recebe uma uma indenização no valor contratado.",
      logoPath: pathCoverageLogos + "wheelchair.png",
      logoAlt: "Wheelchair Icon",
    },
    {
      id: "3",
      title: "Assistência funeral",
      description:
        "No caso do falecimento da pessoa segurada, a pessoa beneficiária recebe assistência para a realização do funeral ou cremação.",
      logoPath: pathCoverageLogos + "candles.png",
      logoAlt: "Candles Icon",
    },
    {
      id: "4",
      title: "Sorteios mensais de 10 mil reais",
      description:
        "A pessoa segurada concorre a sorteios de R$10.000 todo mês enquanto continuar com seu o plano ativo.",
      logoPath: pathCoverageLogos + "money.png",
      logoAlt: "Money Icon",
    },
  ];

  return {
    coverages,
  };
};
