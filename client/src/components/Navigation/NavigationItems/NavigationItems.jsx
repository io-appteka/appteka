import React from 'react';
import styles from './NavigationItems.css';
import { NavigationItem } from './NavigationItem/NavigationItem';

export const NavigationItems = ({isAuth, onLogin}) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/drugs">Leki</NavigationItem>
        <NavigationItem link="/pharmacies">Apteki</NavigationItem>
        <NavigationItem link="/about">O Nas</NavigationItem>
    </ul>
);
