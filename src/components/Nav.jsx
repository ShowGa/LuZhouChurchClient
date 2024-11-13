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

const Nav = ({ navData, style }) => {
  return (
    <nav className={style}>
      <ul className="c-nav_ul">{renderNavItems(navData)}</ul>
    </nav>
  );
};

export default Nav;
