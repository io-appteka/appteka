import React from 'react';
import styles from './NavigationItems.css';
import { NavigationItem } from './NavigationItem/NavigationItem';

export const NavigationItems = ({isAuth}) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/drugs">Drugs</NavigationItem>
        <NavigationItem link="/pharmacies">Pharmacies</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        {isAuth
            ? <NavigationItem link="/logout">Logout</NavigationItem> 
            : <NavigationItem link="/auth">Authenticate</NavigationItem>}
    </ul>
);