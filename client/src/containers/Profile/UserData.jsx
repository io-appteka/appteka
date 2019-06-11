import React from 'react';
import styles from './UserData.css';

export class UserData extends React.Component {
    render() {
        return (

  <div className={styles.UserData}>
     <div className={styles.floatleft}><ul>
                           <li>Nazwa użytkownika</li>
                           <li>Adres e-mail</li>
                           <li>Lokalizacja</li>
                       </ul></div>
                       <div className={styles.floatright}><ul>
                           <li>Wiesława</li>
                           <li>wiesia53@amorki.pl</li>
                           <li>Kraków, Polska</li>
                       </ul></div></div>
           
        );
    }
}
