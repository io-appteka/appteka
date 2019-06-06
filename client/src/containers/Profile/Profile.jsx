import React from 'react';
import { Card } from '../../components/Card/Card';
import { ProfileDelete } from './ProfileDelete';
import { ProfileOpinions } from './ProfileOpinions';
import { PasswordChange } from './PasswordChange';
import {UserData } from './UserData';
import styles from './Profile.css';

export class Profile extends React.Component {    
     state = {
        renderedComponent: 'data',
    };

 mapNamesToComps = {
        data: undefined,
        password: undefined,
        opinions: undefined,
        delete: undefined,
    };

componentDidMount () {
        this.mapNamesToComps = {
            data: <UserData/>,
            password: <PasswordChange/>,
            opinions: <ProfileOpinions/>,
            delete: <ProfileDelete/>,
        };
        this.setState({renderedComponent: 'data'});
    };

    toggleData = () => this.setState({renderedComponent: 'data'});
    togglePassword = () => this.setState({renderedComponent: 'password'});
    toggleOpinions = () => this.setState({renderedComponent: 'opinions'});
    toggleDelete = () => this.setState({renderedComponent: 'delete'});
    
    render() {
        const styleSelected = [styles.activeProfileTab, styles.cont].join(' ');
        const { renderedComponent } = this.state;
        return (
            <>
              <div className={styles.Profile}>
                <div className={styles.ProfileBox}>
                  <div className={styles.grid}>
                      <div className={styles.box2}>
                          <div className={styles.Username}>Wiesława <span>/ Profil użytkownika</span></div></div>
                      <div className={styles.box3}>
                          <ul>
                           <li><button onClick={this.toggleData} className={renderedComponent === 'data' ? styleSelected : styles.cont}>Dane kontaktowe</button></li>
                           <li><button onClick={this.toggleOpinions} className={renderedComponent === 'opinions' ? styleSelected : styles.cont}>Opinie</button></li>
                           <li><button onClick={this.togglePassword} className={renderedComponent === 'password' ? styleSelected : styles.cont}>Zmień hasło</button></li>
                           <li><button onClick={this.toggleDelete} className={renderedComponent === 'delete' ? styleSelected : styles.cont}>Usuń konto</button></li>
                       </ul></div>
                      <div className={styles.box4}> {this.mapNamesToComps[this.state.renderedComponent]} </div>           
</div> 
                </div></div>
           
            </>
            
        );
    }
}
