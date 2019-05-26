import React from 'react';
import styles from './Content.css';

export const Content = ({activeComp}) => (
<div className={styles.Content}>
    <ul>
        <li><button className= {styles.current}>Porównanie cen</button></li>
        <li><button>Szczegóły produktu</button></li>
        <li><button>Opinie</button></li>
    </ul>
</div>
);
