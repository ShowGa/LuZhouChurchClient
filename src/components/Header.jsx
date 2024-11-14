import React, { useEffect, useState } from "react";

import { navListItemsLeft, navListItemsRight } from "./consts/navListItems";

import { RiMenuFill, RiCloseFill } from "react-icons/ri";

import { img1 } from "../assets";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

import "./css/componentCSS.css";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  /* ============================ */
  /*        Helper function       */
  /* ============================ */

  return (
    <header className="c-header">
      {/* main nav bar */}
      <div className="c-nav_container">
        {/* left nav bar */}
        <div className="c-header_left">
          <div className="max-md:hidden">
            <Nav navData={navListItemsLeft} />
          </div>
        </div>

        {/* logo container */}
        <div className="c-header_logo_container left-1/2 transform -translate-x-1/2 max-md:left-4 max-md:transform-none max-md:translate-x-0">
          <div>
            <img className="w-16 h-16 rounded-full" src={img1} alt="" />
          </div>
          <div className="text-yellow-500">
            <p className="text-3xl font-bold">蘆洲禮拜堂</p>
            <p className="text-xs">LuZhou Church</p>
          </div>
        </div>

        {/* right nav bar */}
        <div className={`c-header_right justify-between max-md:justify-end`}>
          <div className="max-md:hidden">
            <Nav navData={navListItemsRight} />
          </div>

          <ul className="c-header_right_function_container">
            {true ? (
              <li>
                <img className="w-10 h-10 rounded-full" src={img1} alt="img1" />
              </li>
            ) : (
              <li>Login</li>
            )}

            <li className="flex items-center justify-center text-yellow-500 md:hidden">
              <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                {isMobileNavOpen ? (
                  <RiCloseFill className="text-3xl " />
                ) : (
                  <RiMenuFill className="text-3xl " />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* mobile nav bar */}
      <div
        className={`c-mobileNav_container md:hidden max-md:max-w-[70%] ${
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MobileNav navData={navListItemsLeft} />
        <MobileNav navData={navListItemsRight} />
      </div>
    </header>
  );
};

export default Header;
