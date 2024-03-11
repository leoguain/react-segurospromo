import React from "react";
import "./styles.css";
import { useSocialMedia} from "../../../../hooks/useSocialMedia"

export const LinksMenu = () => {
  const {socialMedia} = useSocialMedia()
;
  return (
    <div className="LinksMenu_Container">
      <img src="/assets/segurospromo/logo-black.png" alt="Logo Segurospromo" />
      <div className="SocialMediaLinks_Container">
        {socialMedia.map(({ id, href, path, alt }) => (
          <a key={id} href={href}>
            <img src={path} alt={alt}/>
          </a>
        ))}
      </div>
    </div>
  );
};
