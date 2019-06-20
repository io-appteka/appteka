import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './SearchView.css';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import { Description } from '../../components/Description/Description';
import  { Content } from '../../components/Content/Content';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails';
import { Carousel } from '../../components/UI/Carousel/Carousel';
import axios from 'axios';

export class SearchView extends React.Component {
    state = {
        query: {
            drug: null,
            location: 'Krakow, Poland',
            opinion: null,
        },
        isInput: false,
        drugDescription: [],
        data: [],
        opinions: {
            opinionsNumber: 0,
            opinions: [],
        },
        isOpinionsLoaded: false,
        currentDrug: 0,
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const queryContent = {};
        for (let param of query.entries()){
            queryContent[param[0]] = param[1];
        }
        queryContent.drug = queryContent.drug.split(',');
        this.setState({query: queryContent, isInput: true});
        queryContent.drug.forEach((drugId => {
            axios.get(`https://apteka.azurewebsites.net/api/drugs?id=${drugId}`).then((response) => {
                const tempDrugDescription = this.state.drugDescription;
                const drugDescription = {
                    name: response.data.name,
                    desc: response.data.description,
                    rating: response.data.rating,
                    opinionsNumber: response.data.opinions === null ? 0 : response.data.opinions.length,
                    tags: response.data.tags.map(tag => tag.value.toLowerCase()),
                    image: "prednizon.jpg",
                }
                tempDrugDescription.push(drugDescription);
                this.setState({drugDescription: tempDrugDescription});
            })
        }))

        //fetching data from server about drug opinion - name sent -> opinion received
        this.setState({ opinions: {
            opinionsNumber: 71,
            opinions: [
                {
                    opinionId: 'd45h3',
                    author: 'Pierwszy',
                    date: '23-05-2019',
                    text: 'Moja pierwsza opinia, bardzo duzo tekstu aby zrobic dobry test, lets see, lets take even more words to insert into a comment!!!',
                    rating: 3.5,
                },
                {
                    opinionId: '3f45g',
                    author: 'Drugi',
                    date: '24-05-2019',
                    text: 'Moja druga opinia, this can be short.',
                    rating: 4,
                },
                {
                    opinionId: '4589347',
                    author: 'Trzeci',
                    date: '25-05-2019',
                    text: 'Moja druga opinia, this can be short.',
                    rating: 1,
                },
            ]}}, () => this.setState({isOpinionsLoaded: true}));

        //fetching data from server drugName + location sent -> list of found pharmacies (with prices and pharmacyChainId and list of locations) received (should be sorted!)
        //list of locations
        //list of 3 nearest pharmacies to provided location
            //address
            //distance - in kilometers
            //pharmacyStoreId - unique ID
        this.setState({data: [
            {
                pharmacyName: 'Ziko',
                price: '14.99',
                pharmacyChainId: 'sdf9d98f',
                locations: [
                    {
                        address: 'Prądnicka 7',
                        distance: 0.78,
                        openingHours: '7:30 - 21:00',
                        phone: '12 632 32 36',
                        pharmacyStoreId: 'fsdlkfsd',
                        coordinates: {lat: '50.06', lng: '19.93'}
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        openingHours: '0:00 - 0:00',
                        phone: '12 832 91 27',
                        pharmacyStoreId: 'jf32e9esd',
                        coordinates: {lat: '50.05', lng: '19.95'}
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        openingHours: '8:30 - 19:00',
                        phone: '42 650 02 36',
                        pharmacyStoreId: 'f409urq3ie',
                        coordinates: {lat: '50.07', lng: '19.98'}
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
                        openingHours: '7:30 - 21:00',
                        phone: '12 632 32 36',
                        pharmacyStoreId: 'fsdlkfsd',
                        coordinates: {lat: '50.06', lng: '19.93'}
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        openingHours: '0:00 - 0:00',
                        phone: '12 832 91 27',
                        pharmacyStoreId: 'jf32e9esd',
                        coordinates: {lat: '50.05', lng: '19.95'}
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        openingHours: '8:30 - 19:00',
                        phone: '42 650 02 36',
                        pharmacyStoreId: 'f409urq3ie',
                        coordinates: {lat: '50.07', lng: '19.98'}
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
                        openingHours: '7:30 - 21:00',
                        phone: '12 632 32 36',
                        pharmacyStoreId: 'fsdlkfsd',
                        coordinates: {lat: '50.06', lng: '19.93'}
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        openingHours: '0:00 - 0:00',
                        phone: '12 832 91 27',
                        pharmacyStoreId: 'jf32e9esd',
                        coordinates: {lat: '50.05', lng: '19.95'}
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        openingHours: '8:30 - 19:00',
                        phone: '42 650 02 36',
                        pharmacyStoreId: 'f409urq3ie',
                        coordinates: {lat: '50.07', lng: '19.98'}
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
                        openingHours: '7:30 - 21:00',
                        phone: '12 632 32 36',
                        pharmacyStoreId: 'fsdlkfsd',
                        coordinates: {lat: '50.06', lng: '19.93'}
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        openingHours: '0:00 - 0:00',
                        phone: '12 832 91 27',
                        pharmacyStoreId: 'jf32e9esd',
                        coordinates: {lat: '50.05', lng: '19.95'}
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        openingHours: '8:30 - 19:00',
                        phone: '42 650 02 36',
                        pharmacyStoreId: 'f409urq3ie',
                        coordinates: {lat: '50.07', lng: '19.98'}
                    },
                ],
            },
            {
                pharmacyName: 'Super-Pharm',
                price: '26.39',
                pharmacyChainId: '4304593s2',
                locations: [
                    {
                        address: 'Prądnicka 7',
                        distance: 0.78,
                        openingHours: '7:30 - 21:00',
                        phone: '12 632 32 36',
                        pharmacyStoreId: 'fsdlkfsd',
                        coordinates: {lat: '50.06', lng: '19.93'}
                    },
                    {
                        address: 'Aleja Pokoju 14',
                        distance: 0.94,
                        openingHours: '0:00 - 0:00',
                        phone: '12 832 91 27',
                        pharmacyStoreId: 'jf32e9esd',
                        coordinates: {lat: '50.05', lng: '19.95'}
                    },
                    {
                        address: 'Stella-Sawickiego 12',
                        distance: 1.33,
                        openingHours: '8:30 - 19:00',
                        phone: '42 650 02 36',
                        pharmacyStoreId: 'f409urq3ie',
                        coordinates: {lat: '50.07', lng: '19.98'}
                    },
                ],
            },
        ]});
    }

    onPageChange = page => {
        this.setState({currentDrug: page-1})
    }
    render() {
        const { drugDescription, currentDrug, query } = this.state;
        return (
            <div className={styles.SearchView}>
                <div className={styles.Form}>
                    {this.state.isInput && drugDescription[0]  && <SearchField
                        drug={drugDescription[0].name}
                        location={query.location}
                        history={this.props.history}
                    />}
                </div>
                <div className={styles.Scrollable}>
                    <Card>
                        { drugDescription[0] && <Description drugInfo={drugDescription[currentDrug]} tags={drugDescription[currentDrug].tags}/>}
                        {query.drug && query.drug.length > 1 && <Carousel total={query.drug.length*10} onChange={this.onPageChange}/>}
                    {this.state.isOpinionsLoaded && drugDescription[currentDrug] && <Content pricesListData={{data: this.state.data,name: drugDescription[currentDrug].name}} opinionsData={this.state.opinions}/>}
                        <ProductDetails/>
                    </Card>
                </div>
            </div>
        );
    }
}
