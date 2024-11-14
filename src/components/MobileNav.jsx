import React from "react";

const renderMobileNavItems = (items) => {
  return items.map((item, index) => (
    <li key={index}>
      <a href={item.link}>{item.name}</a>
      {item.subItems && <ul>{renderMobileNavItems(item.subItems)}</ul>}
    </li>
  ));
};

const MobileNav = () => {
  return <div>MobileNav</div>;
};

export default MobileNav;
