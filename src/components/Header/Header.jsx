import { React, useState } from "react";
import userAvatar from "../../img/userAvatar.svg";
import arrowDown from "../../img/arrowDown.svg";
import arrowUp from "../../img/arrowUp.svg";
import { Link } from "react-router-dom";
import css from './header.module.css'

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className={css.Container}>
      <div className={css.Header}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Kanban Board</h2>
        </Link>
        <div
          className={css.ProfileContainer}
          onClick={(e) => setMenuActive(!menuActive)}
        >
          <div className={css.Profile}>
            <img alt="userPhoto" src={userAvatar} className={css.ProfilePhoto} />
          </div>
          <img
            alt="arrowDown"
            src={arrowDown}
            className={css.ArrowDown}
            style={{ display: `${menuActive ? "none" : "block"}` }}
          />
          <img
            alt="arrowUp"
            src={arrowUp}
            className={css.ArrowUp}
            style={{ display: `${menuActive ? "block" : "none"}` }}
          />
          {menuActive && (
            <>
              <div className={css.DropdownContainer}></div>
              <ul className={css.Dropdown}>
                <li className={css.DropdownItem}>Profile</li>
                <li className={css.DropdownItem}>Log Out</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
