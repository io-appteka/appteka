import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './PasswordChange.css';

export class PasswordChange extends React.Component {
    render() {
        return (
             <div className={styles.PasswordChange}>
     <div className={styles.floatleft}><ul>
                           <li>Bieżące hasło</li>
                           <li>Nowe hasło</li>
                           <li>Powtórz nowe hasło</li>
                       </ul></div>
                       <div className={styles.floatright}><ul>
                         <li><input id="currentPassword" type="password"></input></li>
                           <li><input id="newPassword" type="password"></input></li>
                           <li><input id="repeatPassword" type="password"></input></li>
                       </ul></div>
  <input type="submit" value="Zapisz zmiany"></input></div>
             

        );
    }
}
