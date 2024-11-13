import React from "react";

import { navListItemsLeft, navListItemsRight } from "./consts/navListItems";

import Nav from "./Nav";

// import "./css/componentCSS.css";

const Header = () => {
  return (
    <header>
      <div className="c-nav_container">
        <Nav navData={navListItemsLeft} style="c-header_left" />
        <div className="c-header_logo_container">Middle Content</div>
        <Nav navData={navListItemsRight} style="c-header_right" />
      </div>
    </header>
  );
};

export default Header;
