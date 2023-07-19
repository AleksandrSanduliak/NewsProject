import React from "react";
import { NavLink } from "react-router-dom";
import { setActive } from "../../../utils/funcs/setActive";
import "./header.modules.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__items">
              <NavLink to="/" className={setActive}>
                main
              </NavLink>
            </li>
            <li className="menu__items">
              <NavLink to="login" className={setActive}>
                login
              </NavLink>
            </li>
            <li className="menu__items">
              <NavLink to="news" className={setActive}>
                news
              </NavLink>
            </li>
            <li className="menu__items">
              <NavLink to="profile" className={setActive}>
                profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
