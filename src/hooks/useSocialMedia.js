export const useSocialMedia = () => {
  const pathLogos = "/assets/icons/";
  const socialMedia = [
    {
      id: "facebook",
      href: "/",
      path: pathLogos + "facebook.png",
      alt: "Facebook",
    },
    {
      id: "twitter",
      href: "/",
      path: pathLogos + "twitter.png",
      alt: "Twitter",
    },
    {
      id: "instagram",
      href: "/",
      path: pathLogos + "instagram.png",
      alt: "Instagram",
    },
  ];

  return {
    socialMedia,
  };
};
