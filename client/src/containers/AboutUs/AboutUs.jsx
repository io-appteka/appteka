import React from 'react';
import { Card } from '../../components/Card/Card';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import styles from './AboutUs.css';

export class AboutUs extends React.Component {
     state = {
        query: {
            drug: null,
            location: 'Krakow, Poland',
        },
        isInput: false,
    };

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const queryContent = {};
        for (let param of query.entries()){
            queryContent[param[0]] = param[1];
        }
        this.setState({query: queryContent, isInput: true});
    };

    
    render() {
        return (
            <>
            <div className={styles.Form}>
                    {this.state.isInput && <SearchField 
                       drug={this.state.query.drug}
                       location={this.state.query.location}
                       history={this.props.history}/>}
                </div>
            <div className={styles.AboutUs}>
                <Card type='higher'>
                    <div className={styles.Content}>
                        <h1>O Apptece</h1>
                        <p><span>Appteka</span> to portal, który ma na celu podjęcie zagadnienia wspomagania wyszukiwania tanich leków oferowanych przez apteki na określonym obszarze zainteresowania osoby wyszukującej. Po wyszukaniu przez użytkownika danego leku bądź tagu, zostaną mu udostępnione informacje na temat leku (skład, zastosowanie, efekty uboczne, zdjęcia, zamienniki, średnia cena) oraz aptek (dokładna cena leku, lokalizacja, godziny otwarcia, numer kontaktowy). </p>
                        <h2>Kim jesteśmy?</h2>
                        <p>Appteka to aplikacja webowa stworzona na potrzeby przedmiotu Inżynieria Oprogramowania. Nad projektem pracował 7-osobowy zespół studentów trzeciego roku Informatyki Stosowanej na Wydziale Fizyki i Informatyki Stosowanej Akademii Górniczo-Hutniczej, w składzie: Patryk Nguyen, Wojciech Majkut, Wojciech Maślanka, Weronika Schabowicz, Karolina Placek, Mikołaj Polański, Emanuel Gawenda.</p>
                        
                    </div>
                </Card>
            </div></>
        );
    }
}
