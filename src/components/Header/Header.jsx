import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Header() {
  const rates = useSelector((state) => state.valet.data);
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__list">
          <li className="header__item">
            <p className="header__text">
              <span>&#36;</span>
              {((1 * rates[0].UAH) / rates[0].USD).toFixed(2) + " UAH"}
            </p>
          </li>
          <li className="header__item">
            <p className="header__text">
              <span>€</span>
              {((1 * rates[0].UAH) / rates[0].EUR).toFixed(2) + " UAH"}
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
