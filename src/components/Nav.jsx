import React from "react";

import "./css/componentCSS.css";

const renderNavItems = (items) => {
  return items.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.name}</a>
      {item.subItems && <ul>{renderNavItems(item.subItems)}</ul>}
    </li>
  ));
};

const Nav = ({ navData }) => {
  return (
    <nav>
      <ul className="c-nav_ul_mainItems">{renderNavItems(navData)}</ul>
    </nav>
  );
};

export default Nav;
