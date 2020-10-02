import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to={routes.USERS.LIST}>
        <h1 className={styles.logo}>users</h1>
      </Link>
      <nav>
        <NavLink className={styles.navLink} activeClassName={styles.activeNavLink} to={routes.AUTHOR}>
          AUTHOR
        </NavLink>
        <NavLink className={styles.navLink} activeClassName={styles.activeNavLink} to={routes.USERS.LIST} exact>
          USERS
        </NavLink>
        <NavLink
          className={styles.navLinkWithBorder}
          activeClassName={styles.activeNavLinkWithBorder}
          to={routes.USERS.FORM}
        >
          ADD USER
        </NavLink>
      </nav>
    </header>
  );
}
