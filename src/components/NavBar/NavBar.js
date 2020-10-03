import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import routes from '../../constants/routes';

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <NavLink className={styles.navLink} activeClassName={styles.activeNavLink} to={routes.AUTHOR}>
        AUTHOR
      </NavLink>
      <NavLink className={styles.navLink} activeClassName={styles.activeNavLink} to={routes.USERS.LIST} exact>
        USERS
      </NavLink>
    </nav>
  );
}
