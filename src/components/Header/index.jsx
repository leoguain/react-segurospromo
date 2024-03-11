import React from "react";
import { Topbar } from "./Topbar";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  return (
    <React.Fragment>
      <Topbar />
      <HeaderMenu />
    </React.Fragment>
  );
};
