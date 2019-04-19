import React from 'react';
import styles from './NavigationItems.css';
import { NavigationItem } from './NavigationItem/NavigationItem';

export const NavigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/">Drugs</NavigationItem>
        <NavigationItem link="/">Pharmacies</NavigationItem>
        <NavigationItem link="/">About</NavigationItem>
    </ul>
);