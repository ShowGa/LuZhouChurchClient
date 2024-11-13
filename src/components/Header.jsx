import React, { useEffect, useState } from "react";

import { navListItemsLeft, navListItemsRight } from "./consts/navListItems";

import { img1 } from "../assets";

import Nav from "./Nav";

import "./css/componentCSS.css";

const Header = () => {
  const [isHeaderEffect, setIsHeaderEffect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderEffect(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="c-header">
      <div
        className={`c-nav_container ${isHeaderEffect ? "c-header_effect" : ""}`}
      >
        <div className="c-header_left">
          <Nav navData={navListItemsLeft} />
        </div>

        <div className="c-header_logo_container">Middle Content</div>

        <div className="c-header_right">
          <Nav navData={navListItemsRight} />
          <ul className="mr-10 flex items-center">
            {true ? (
              <li>
                <img className="w-10 h-10 rounded-full" src={img1} alt="img1" />
              </li>
            ) : (
              <li>Login</li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
