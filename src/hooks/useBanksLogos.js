export const useBanksLogos = () => {
  const pathBanksLogos = "/assets/banks-icons/";
  const banksLogos = [
    {
      id: "bb",
      path: pathBanksLogos + "bb.png",
      alt: "Logo Banco do Brasil",
    },
    {
      id: "bradesco",
      path: pathBanksLogos + "bradesco.png",
      alt: "Logo Banco Bradesco",
    },
    {
      id: "itau",
      path: pathBanksLogos + "itau.png",
      alt: "Logo Banco Itau",
    },
    {
      id: "santander",
      path: pathBanksLogos + "santander.png",
      alt: "Logo Banco Santander",
    },
    {
      id: "original",
      path: pathBanksLogos + "original.png",
      alt: "Logo Banco Original",
    },
    {
      id: "inter",
      path: pathBanksLogos + "inter.png",
      alt: "Logo Banco Inter",
    },
    {
      id: "bs2",
      path: pathBanksLogos + "bs2.png",
      alt: "Logo Banco BS2",
    },
  ];

  return {
    banksLogos,
  };
};
