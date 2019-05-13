import React from 'react';
import styles from './NavigationItems.css';
import { NavigationItem } from './NavigationItem/NavigationItem';

export const NavigationItems = ({isAuth, onLogin}) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/drugs">Drugs</NavigationItem>
        <NavigationItem link="/pharmacies">Pharmacies</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        {isAuth
            ? <NavigationItem link="/logout">Log out</NavigationItem> 
            : <NavigationItem link="/auth" onClick={onLogin}>Log in</NavigationItem>}
        {isAuth ? null : <NavigationItem link="/register" onClick={onLogin}>Register</NavigationItem>}
    </ul>
);