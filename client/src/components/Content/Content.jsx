import React from 'react';
import styles from './Content.css';

export class Content extends React.Component {

    render() {   
     return (
            <div className={styles.Content}>
                <ul>
                    <li><button className={styles.cont}>Porównanie cen</button></li>
                    <li><button className={styles.cont}>Szczegóły produktu</button></li>
                    <li><button className={styles.cont}>Opinie</button></li>
                </ul>
            </div> 

    );
  }
    
    }
