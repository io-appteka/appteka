import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './Drugs.css';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import { DrugList } from '../../components/Lists/DrugList/DrugList';
import { CheckableTag } from '../../components/UI/CheckableTag/CheckableTag';
import { Icon } from 'antd';
import axios from 'axios';


export class Drugs extends React.Component {
     state = {
        query: {
            drug: null,
            location: 'Krakow, Poland',
        },
        mode: 'lowest',
        isInput: false,
        isLoaded: false,
        tags: [],
        drugs: [],
        drugsCopy: [],
        filters: []
    };

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const queryContent = {};
        for (let param of query.entries()){
            queryContent[param[0]] = param[1];
        }
        this.setState({query: queryContent, isInput: true});

        axios.get('https://apteka.azurewebsites.net/api/drugs/all').then(response => {
            const temp = [];
            response.data.map(drug => drug.tags.map(tag => temp.push(tag.value.toLowerCase())));
            const temp2 = [...new Set(temp)];

            this.setState({
                drugs: response.data.map(drug => (
                {
                    name: drug.name,
                    desc: drug.description,
                    rating: drug.rating,
                    opinionsNumber: drug.drugOpinions === null ? 0 : drug.drugOpinions.length,
                    tags: drug.tags.map(tag => tag.value.toLowerCase()),
                    image: drug.name.toLowerCase() + '.jpg',
                })),
                tags: temp2,
            }, () => {this.setState({isLoaded: true}); this.sortByRating(this.state.drugs) });
        })
    };


    sortByRating = (drugs) => {
        const { mode } = this.state;
        const sortedDrugs = drugs.sort((firstDrug, secondDrug) => {
            if (mode === 'highest') return firstDrug.rating - secondDrug.rating;
            else if (mode === 'lowest') return secondDrug.rating - firstDrug.rating;
            else return 0;
            });
        this.setState({drugs: sortedDrugs});
        this.setState({drugsCopy: this.state.drugs});
    };

    toggleSortingMode = () => {
        const { mode } = this.state;
        if (mode === 'highest') this.setState({mode: 'lowest'},() => this.sortByRating(this.state.drugs));
        else this.setState({mode: 'highest'},() => this.sortByRating(this.state.drugs));
    };

    updateFilters = (tag, checked) => {
        let { filters } = this.state;
        const newFilters = checked ? [...filters, tag] : filters.filter(f => f !== tag);
        this.setState({filters: newFilters}, () => this.filterDrugs());
    }

    filterDrugs = () => {
        let filteredDrugs;
        if (this.state.filters.length === 0) {
            filteredDrugs = this.state.drugsCopy;
        }
        else {
            filteredDrugs = this.state.drugsCopy.filter( drug => {
                for (let i = 0; i < this.state.filters.length; i++) {
                    if (drug.tags.includes(this.state.filters[i])) {
                        return true;
                    }
                }
                return false;
            });
        }
        this.setState({drugs: filteredDrugs});
    }

    render() {
        return (
            <div>
                <div className={styles.Form}>
                    {this.state.isInput && <SearchField
                        drug={this.state.query.drug}
                        location={this.state.query.location}
                        history={this.props.history}
                    />}
                </div>
                <div className={styles.Drugs}>
                    <Card>
                        <div className={styles.Header}>Tagi:</div>
                        <div className={styles.Tags}>
                            {this.state.tags && this.state.tags.map(tag =>
                            <CheckableTag
                                key={tag}
                                checked={this.state.filters.indexOf(tag) > -1}
                                onClick={checked => this.updateFilters(tag, checked)}
                            >
                            {tag} </CheckableTag>)}
                        </div>
                        <div className={styles.Sort}>
                            Sortuj według:<button onClick={this.toggleSortingMode} className={styles.SortButton}>
                                {this.state.mode === 'highest'
                                ? (<span>OCENA ROSNĄCO <Icon type="arrow-up"/></span>)
                                : (<span>OCENA MALEJĄCO <Icon type="arrow-down"/></span>)}</button>
                        </div>
                        {this.state.isLoaded && <DrugList drugs={this.state.drugs}/>}
                    </Card>
                </div>
            </div>
        );
    }
}
