import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => (
  <ul className={styles.wrapper}>
    <li className={styles.navItem}>
      <NavLink
        className={({ isActive }) =>
          `${styles.navItemLink} 
          ${isActive ? styles.navItemLinkActive : "none"}`
        }
        to="/"
      >
        Twitters
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        className={({ isActive }) =>
          `${styles.navItemLink} 
              ${isActive ? styles.navItemLinkActive : "none"}`
        }
        to="/articles"
      >
        Articles
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        className={({ isActive }) =>
          `${styles.navItemLink} 
         ${isActive ? styles.navItemLinkActive : "none"}`
        }
        to="/notes"
      >
        Notes
      </NavLink>
    </li>
  </ul>
);

export default HeaderNavigation;
