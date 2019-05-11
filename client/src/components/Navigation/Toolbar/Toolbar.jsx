import React from 'react';
import styles from './Toolbar.css';
import { NavigationItems } from '../NavigationItems/NavigationItems'
import { NavigationItem } from '../NavigationItems/NavigationItem/NavigationItem';

export const Toolbar = () => (
    <header className={styles.Toolbar}>
        <div className={styles.Logo}><NavigationItem exact link ="/">APPTEKA</NavigationItem></div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);