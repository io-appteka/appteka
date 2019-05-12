import React from 'react';
import styles from './Toolbar.css';
import { NavigationItems } from '../NavigationItems/NavigationItems'
import { NavigationItem } from '../NavigationItems/NavigationItem/NavigationItem';

export const Toolbar = ({isAuth, onLogin}) => (
    <header className={styles.Toolbar}>
        <div className={styles.Logo}><NavigationItem exact link ="/">APPTEKA</NavigationItem></div>
        <nav>
            <NavigationItems isAuth={isAuth} onLogin={onLogin}/>
        </nav>
    </header>
);