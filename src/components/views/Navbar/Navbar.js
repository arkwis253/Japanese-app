import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navLinkStyles = ({isActive}) => (isActive ? styles.active : '');
  const navRef = useRef();

  const navToggleOn = () => {
    setIsToggled(true);
  }

  const navToggleOff = () => {
    setIsToggled(false);
  }

  const menuNavToggle = () => {
    setIsToggled(!isToggled);
  }

  

  return (
    <div  className={clsx(styles.navbar, isToggled && styles.toggle)} onMouseOver={navToggleOn} onMouseOut={navToggleOff}>
      <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick={menuNavToggle}/>
      <ul>
        <li><NavLink to="/" className={navLinkStyles}><FontAwesomeIcon icon={faHouse} className={styles.icon} /> Home</NavLink></li>
        <li><NavLink to="/known" className={navLinkStyles}><FontAwesomeIcon icon={faCheck} className={styles.icon} /> Known</NavLink></li>
        <li><NavLink to="/unknown" className={navLinkStyles}><FontAwesomeIcon icon={faXmark} className={styles.icon} /> Unknown</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;