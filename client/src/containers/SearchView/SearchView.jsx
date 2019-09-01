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
        opinionList: [],
        pharmacyList: [],
        pharmiaciesByDrugs:[],
        currentDrug: 0,
        numberToLoad: undefined,
        isLoaded: false,
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const queryContent = {};
        for (let param of query.entries()){
            queryContent[param[0]] = param[1];
        }
        queryContent.drug = queryContent.drug.split(',');
        const pharmiaciesByDrugs = [];
        for (let i = 0; i < queryContent.drug.length; ++i) {
            pharmiaciesByDrugs.push([]);
        }
        this.setState({query: queryContent, isInput: true, numberToLoad: queryContent.drug.length, pharmiaciesByDrugs}, () => {
            queryContent.drug.forEach(((drugId, index) => {
                axios.get(`https://localhost:44363/api/drugs?id=${drugId}`).then((response) => {
                const tempDrugDescription = [...this.state.drugDescription];
                const tempOpinionList = [...this.state.opinionList];
                const tempPharmacies = [...this.state.pharmiaciesByDrugs];
                const drugDescription = {
                    name: response.data.name,
                    desc: response.data.description,
                    rating: response.data.rating,
                    opinionsNumber: response.data.drugOpinions === null ? 0 : response.data.drugOpinions.length,
                    tags: response.data.tags.map(tag => tag.value.toLowerCase()),
                    image: "prednizon.jpg",
                }

                const drugOpinions = {};
                if (response.data.drugOpinions !== null) {
                    drugOpinions.opinionsNumber = response.data.drugOpinions.length;
                    drugOpinions.opinions = [];
                    response.data.drugOpinions.forEach(opinion => drugOpinions.opinions.push({
                        opinionId: opinion.id,
                        author: opinion.author === null ? 'Gienia Anonim' : opinion.author,
                        date: opinion.date.split('T')[0],
                        text: opinion.text,
                        rating: opinion.rating,
                    }));
                }
                tempDrugDescription.push(drugDescription);
                tempOpinionList.push(drugOpinions);
                tempPharmacies[index] = response.data.pharmacyStores;
                this.setState({drugDescription: tempDrugDescription});
                this.setState({opinionList: tempOpinionList});
                this.setState({pharmiacies:tempPharmacies});
                this.setState(prevState => ({numberToLoad: prevState.numberToLoad - 1}), () => {
                    if (this.state.numberToLoad === 0) {
                        this.calculatePharmacies();
                        this.setState({isLoaded: true})};
                    })
                })
            }))
        });
    }

    calculatePharmacies = () => {
        const finalList = [];
        const commonPharmacies = [];
        const pharmcaciesByCompanies = {};
        const pharmacies = [...this.state.pharmiacies];
        pharmacies[0].forEach(pharmacy => {
            let isCommon = true;
            for (let i = 1; i < pharmacies.length; ++i) {
                if (pharmacies[i].filter((otherPharmacy) => otherPharmacy.id === pharmacy.id).length === 0) {
                    isCommon = false;
                    break;
                }
            }
            if (isCommon) commonPharmacies.push(pharmacy);
        });
        commonPharmacies.forEach(pharmacy => 
            !pharmcaciesByCompanies[pharmacy.pharmacyName] 
            ? pharmcaciesByCompanies[pharmacy.pharmacyName] = [pharmacy] 
            : pharmcaciesByCompanies[pharmacy.pharmacyName].push(pharmacy)
        )
        Object.keys(pharmcaciesByCompanies).forEach(key => {
            finalList.push({
                pharmacyName: key,
                pharmacyChainId: key,
                price: 9.99,
                locations: pharmcaciesByCompanies[key].map(store => ({
                    address: store.address,
                    distance: store.distance,
                    openingHours: store.openingHours,
                    phone: store.phoneNumber,
                    pharmacyStoreId: store.id,
                    coordinates: store.coordinates,
                }))
            })
        })
        this.setState({data: finalList});
    };

    onPageChange = page => {
        this.setState({currentDrug: page-1})
    }
    render() {
        const { drugDescription, currentDrug, query } = this.state;
        let output = (
            <div className={styles.SearchView}>
            </div>
        );

        if (this.state.isLoaded) output=(
            <div className={styles.SearchView}>
                <div className={styles.Form}>
                    {this.state.isInput && <SearchField
                        drug={drugDescription[0].name}
                        location={query.location}
                        history={this.props.history}
                    />}
                </div>
                <div className={styles.Scrollable}>
                    <Card>
                        <Description drugInfo={drugDescription[currentDrug]} tags={drugDescription[currentDrug].tags}/>
                        {query.drug && query.drug.length > 1 && <Carousel total={query.drug.length*10} onChange={this.onPageChange}/>}
                    <Content pricesListData={{data: this.state.data,name: drugDescription[currentDrug].name}} opinionsData={this.state.opinionList[currentDrug]}/>
                        <ProductDetails/>
                    </Card>
                </div>
            </div>
        )
        return output;
    }
}
