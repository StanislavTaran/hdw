import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Portal from '../Portal/Portal';
import NavBar from '../NavBar/NavBar';
import { getIsShowNavBar } from '../../redux/app/appSelectors';
import { setIsShowNavBar } from '../../redux/app/appActions';
import styles from './Header.module.scss';
import routes from '../../constants/routes';
import Button from '../common/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import menuIcon from '../../images/menu.svg';

export default function Header() {
  const dispatch = useDispatch();

  const isShowNavBar = useSelector(getIsShowNavBar);
  const handleShowNavBar = () => dispatch(setIsShowNavBar(!isShowNavBar));

  const location = useLocation();
  const isShowAddUserButton = location.pathname === routes.USERS.LIST;

  return (
    <header className={styles.header}>
      <Button onClick={handleShowNavBar} className={styles.menuButton}>
        <img src={menuIcon} alt="menu" />
      </Button>
      {isShowNavBar && (
        <Portal onClose={handleShowNavBar}>
          <NavBar />
        </Portal>
      )}
      {isShowAddUserButton && (
        <Button>
          <Link className={styles.link} to={routes.USERS.FORM}>
            Add User
          </Link>
        </Button>
      )}
    </header>
  );
}
