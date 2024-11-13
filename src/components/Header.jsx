import React, { useEffect, useState } from "react";

import { navListItemsLeft, navListItemsRight } from "./consts/navListItems";

import { img1 } from "../assets";

import Nav from "./Nav";

import "./css/componentCSS.css";

const Header = () => {
  return (
    <header className="c-header">
      <div className="c-nav_container">
        <div className="c-header_left">
          <Nav navData={navListItemsLeft} />
        </div>

        <div className="c-header_logo_container">
          <div>
            <img className="w-16 h-16 rounded-full" src={img1} alt="" />
          </div>
          <div className="text-yellow-400">
            <p className="text-3xl font-bold">蘆洲禮拜堂</p>
            <p className="text-xs">LuZhou Church</p>
          </div>
        </div>

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
