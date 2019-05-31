import React from 'react';
import styles from './Toolbar.css';
import { NavigationItems } from '../NavigationItems/NavigationItems'
import { NavigationItem } from '../NavigationItems/NavigationItem/NavigationItem';

export const Toolbar = ({isAuth, onLogin}) => (
    <header className={styles.Toolbar}>
       <nav>
            <NavigationItems isAuth={isAuth} onLogin={onLogin}/>
        </nav>
        <div className={styles.Logo}><NavigationItem exact link ="/">APPTEKA</NavigationItem></div>
        <div className={styles.Logging}>
            {isAuth
            ? <NavigationItem link="/profile">Profil</NavigationItem>
            : null}
            {isAuth
                ? <NavigationItem  link="/logout">Wyloguj się</NavigationItem> 
                : <NavigationItem  link="/auth" onClick={onLogin}>Zaloguj się</NavigationItem>}
           
            {isAuth ? null : <div className={styles.Register}><NavigationItem link="/register" onClick={onLogin}>Załóż konto</NavigationItem></div>}
        </div>
        
    </header>
);
