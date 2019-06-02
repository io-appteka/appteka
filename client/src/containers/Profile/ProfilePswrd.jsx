import React from 'react';
import { Card } from '../../components/Card/Card';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import styles from './Profile.css';

export class Profile extends React.Component {

    
    render() {
        return (
           

            <div className={styles.Profile}>
                <div className={styles.ProfileBox}>
                  <div className={styles.grid}>
  <div className={styles.box2}><div className={styles.Username}>Wiesława <span>/ Profil użytkownika</span></div></div>
  <div className={styles.box3}><ul>
                           <li><button>Dane kontaktowe</button></li>
                           <li><button>Opinie</button></li>
                           <li><button>Zmień hasło</button></li>
                           <li><button>Usuń konto</button></li>
                       </ul></div>
                     
  <div className={styles.box4}><ul>
                           <li>Bieżące hasło</li>
                           <li>Nowe hasło</li>
                           <li>Powtórz hasło</li>
                       </ul></div>
                       <div className={styles.box5}><ul>
                           <li><input id="currentPassword" type="password"></input></li>
                           <li><input id="newPassword" type="password"></input></li>
                           <li><input id="repeatPassword" type="password"></input></li>
                       </ul>
                       </div>
            <input type="submit" value="Zapisz zmiany"></input>

</div>
                </div></div>
            
        );
    }
}
