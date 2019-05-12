import React from 'react';
import styles from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

export const NavigationItem = ({children, link, exact, onClick}) => (
    <li className={styles.NavigationItem}>
        <NavLink 
        to={link}
        exact={exact}
        activeClassName={styles.active}
        onClick={onClick}>{children}</NavLink>
    </li>
);