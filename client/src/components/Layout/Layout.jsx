import React from 'react';
import styles from './Layout.css';
import {Toolbar} from '../Navigation/Toolbar/Toolbar';

export const Layout = ({children}) => (
    <div className={styles.Layout}>
        <Toolbar/>
        <main className={styles.Content}>{children}</main>
    </div>
);