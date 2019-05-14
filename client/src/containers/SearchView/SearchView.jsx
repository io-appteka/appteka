import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './SearchView.css';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import { DrugDescription } from '../../components/DrugDescription/DrugDescription';
import { PricesList } from '../../components/Lists/PricesList/PricesList';
import Content from '../../components/Content/Content';

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
        myArray: [
            {content: 1, body : "abcdef dummy text idk what to do"},
        ]
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

        //fetching data from server drugName + location sent -> list of found pharmacies (with prices and pharmacyChainId and list of locations) received (should be sorted!)
        //list of locations
        //list of 3 nearest pharmacies to provided location
            //address 
            //distance - in kilometers
            //pharmacyStoreId - unique ID
        this.setState({
    data: [
            {
                pharmacyName: 'Ziko',
                price: '14.99',
                pharmacyChainId: 'sdf9d98f',
                locations: [
                    {
                        address: 'Prądnicka 7',
                        distance: 0.78,
                        pharmacyStoreId: 'fsdlkfsd',
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        pharmacyStoreId: 'jf32e9esd',
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        pharmacyStoreId: 'f409urq3ie',
                    },
                ],
            },
            {
                pharmacyName: 'Niezapominajka',
                price: '15.00',
                pharmacyChainId: 'rr049u30',
                locations: [
                    {
                        address: 'Prądnicka 7',
                        distance: 0.78,
                        pharmacyStoreId: 'fsdlkfsd',
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        pharmacyStoreId: 'jf32e9esd',
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        pharmacyStoreId: 'f409urq3ie',
                    },
                ],
            },
            {
                pharmacyName: 'Słoneczna',
                price: '24.30',
                pharmacyChainId: 'etr40403',
                locations: [
                    {
                        address: 'Prądnicka 7',
                        distance: 0.78,
                        pharmacyStoreId: 'fsdlkfsd',
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        pharmacyStoreId: 'jf32e9esd',
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        pharmacyStoreId: 'f409urq3ie',
                    },
                ],
            },
            {
                pharmacyName: 'DOZ',
                price: '26.19',
                pharmacyChainId: '093cm4003',
                locations: [
                    {
                        address: 'Prądnicka 7',
                        distance: 0.78,
                        pharmacyStoreId: 'fsdlkfsd',
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        pharmacyStoreId: 'jf32e9esd',
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        pharmacyStoreId: 'f409urq3ie',
                    },
                ],},
            {
                pharmacyName: 'Super-Pharm',
                price: '26.39',
                pharmacyChainId: '4304593s2',
                locations: [
                    {
                        address: 'Prądnicka 7',
                        distance: 0.78,
                        pharmacyStoreId: 'fsdlkfsd',
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        pharmacyStoreId: 'jf32e9esd',
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        pharmacyStoreId: 'f409urq3ie',
                    },
                ],
            },
        ]});
    }

    render() {
        return (
            <div className={styles.SearchView}>
                <Card>
                                  
                    <div>
                        <ul>
                            {
                                this.state.myArray.map((content,index)=>{
                                return(
                                    <Content/>
                                )
                            })
                                }
                        </ul>
                    </div>
                         
                             
                             
                    {this.state.isInput && <SearchField
                        drug={this.state.query.drug}
                        location={this.state.query.location}
                        history={this.props.history}
                    />}
                    <DrugDescription drugInfo={this.state.drugDescrition}/>
                    <PricesList data={this.state.data}/>
                </Card>
            </div>
        );
    }
}