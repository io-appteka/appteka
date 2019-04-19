import React from 'react';
import styles from './NavigationItem.css';

export const NavigationItem = ({children, link, active}) => (
    <li className={styles.NavigationItem}>
        <a 
        href={link}
        className = {active ? styles.active : null}>{children}</a>
    </li>
);