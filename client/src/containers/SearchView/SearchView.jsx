import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './SearchView.css';
import { SearchField } from '../../components/UI/SearchField/SearchField';
import { DrugDescription } from '../../components/DrugDescription/DrugDescription';

export class SearchView extends React.Component {
    state = {
        query: {
            drug: null,
            location: 'Krakow, Poland',
        },
        isInput: false,
        drugDescrition: {
            name: null,
            desc: null,
        },
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const queryContent = {};
        for (let param of query.entries()){
            queryContent[param[0]] = param[1];
        }
        this.setState({query: queryContent, isInput: true});

        //fetching data from server about drug description - name sent -> description received
        this.setState({drugDescrition: {
            name:"Prednisone",
            desc: "Prednisone is used to treat conditions such as arthritis, blood disorders, breathing problems, severe allergies, skin diseases, cancer, eye problems, and immune system disorders. Prednisone belongs to a class of drugs known as corticosteroids. It decreases your immune system's response to various diseases to reduce symptoms such as swelling and allergic-type reactions.",
        }});
    }

    render() {
        return (
            <div className={styles.SearchView}>
                <Card>
                    {this.state.isInput && <SearchField
                        drug={this.state.query.drug}
                        location={this.state.query.location}
                    />}
                    <DrugDescription drugInfo={this.state.drugDescrition}/>
                    SearchView
                </Card>
            </div>
        );
    }
}