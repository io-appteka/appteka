import React from 'react';
import { Card } from '../../components/Card/Card';
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
                           <li>Nazwa użytkownika</li>
                           <li>Adres e-mail</li>
                           <li>Lokalizacja</li>
                       </ul></div>
                       <div className={styles.box5}><ul>
                           <li>Wiesława</li>
                           <li>wiesia53@amorki.pl</li>
                           <li>Kraków, Polska</li>
                       </ul></div>
</div>
                </div></div>
            
        );
    }
}
