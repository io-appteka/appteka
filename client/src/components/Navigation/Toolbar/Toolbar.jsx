import React from 'react';
import styles from './Toolbar.css';
import { NavigationItems } from '../NavigationItems/NavigationItems'
export const Toolbar = ({}) => (
    <header className={styles.Toolbar}>
        <div className={styles.Logo}>APPTEKA</div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);