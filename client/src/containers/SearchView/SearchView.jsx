import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './SearchView.css';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import { DrugDescription } from '../../components/DrugDescription/DrugDescription';
import { PricesList } from '../../components/Lists/PricesList/PricesList';

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
        data: [],
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

        //fetching data from server drugName + location sent -> list of found pharmacies (with prices and pharmacyChainId) received (should be sorted!)
        this.setState({data: [
            {
                pharmacyName: 'Ziko',
                price: '14.99',
                pharmacyChainId: 'sdf9d98f',
            },
            {
                pharmacyName: 'Niezapominajka',
                price: '15.00',
                pharmacyChainId: 'rr049u30',
            },
            {
                pharmacyName: 'Słoneczna',
                price: '24.30',
                pharmacyChainId: 'etr40403',
            },
            {
                pharmacyName: 'DOZ',
                price: '26.19',
                pharmacyChainId: '093cm4003',
            },
            {
                pharmacyName: 'Super-Pharm',
                price: '26.39',
                pharmacyChainId: '4304593s2',
            },
        ]});
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
                    <PricesList data={this.state.data}/>
                </Card>
            </div>
        );
    }
}