import React from "react";

const renderMobileNavItems = (items) => {
  return items.map((item, index) => (
    <li key={index} className="c-mobileNav_li_mainItem">
      <div className="c-mobileNav_Atag_container">
        <a href={item.link}>{item.name}</a>
        {item.subItems ? <span>1</span> : ""}
      </div>

      {item.subItems && (
        <ul className="c-mobileNav_ul_subItems">
          {renderMobileNavItems(item.subItems)}
        </ul>
      )}
    </li>
  ));
};

const MobileNav = ({ navData }) => {
  return (
    <nav>
      <ul className="c-mobileNav_ul_mainItems">
        {renderMobileNavItems(navData)}
      </ul>
    </nav>
  );
};

export default MobileNav;
