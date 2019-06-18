import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './Drugs.css';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import { DrugList } from '../../components/Lists/DrugList/DrugList';
import { CheckableTag } from '../../components/UI/CheckableTag/CheckableTag';
import { Icon } from 'antd';


export class Drugs extends React.Component {
     state = {
        query: {
            drug: null,
            location: 'Krakow, Poland',
        },
        mode: 'lowest',
        isInput: false,
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

        this.setState({tags: ["alergia", "oddychanie", "skóra", "bardzo boli", "atopowe zapalenie skóry", "ból", "obrzęk", "jaskra", "wzdęcia", "higiena nosa", "probiotyk", "witamina C"]});
        this.setState({drugs: [
            {
                name: "Prednizon",
                desc: "Prednizon jest hormonem kortykosteroidowym, syntetyczną pochodną kortyzonu, wykazującą działanie przeciwzapalne, przeciwalergiczne dłuższe i ok. 3,5 razy silniejsze niż kortyzon, natomiast słabsze działanie mineralotropowe.",
                rating: 3.2,
                opinionsNumber: 21,
                tags: ["alergia", "oddychanie", "skóra", "atopowe zapalenie skóry"],
                image: "prednizon.jpg",
            },
            {
                name: "Alka-Prim",
                desc: "Alka-Prim zawiera kwas acetylosalicylowy, który działa przeciwbólowo, przeciwzapalnie i przeciwgorączkowo.",
                rating: 1.9,
                opinionsNumber: 12,
                tags: ["higiena nosa", "probiotyk", "skóra"],
                image: "alka-prim.jpg",
            },
            {
                name: "Kofepar",
                desc: "Stosowany w bólach o słabym lub umiarkowanym nasileniu: bólach głowy, także migrenowych, bólach kostnych, stawowych i mięśniowych, nerwobólach i bólach po zabiegach chirurgicznych i stomatologicznych oraz w stanach gorączkowych.",
                rating: 5.0,
                opinionsNumber: 9,
                tags: ["obrzęk", "oddychanie", "ból", "jaskra"],
                image: "kofepar.jpg",
            },
            {
                name: "Efferalgan czopki",
                desc: "Stosowany jako środek przeciwgorączkowy i przeciwbólowy w bólach różnego pochodzenia (bóle głowy, zębów, stawowe, miesiączkowe, nerwobóle i inne).",
                rating: 2.8,
                opinionsNumber: 33,
                tags: ["alergia", "oddychanie", "bardzo boli", "wzdęcia", "higiena nosa"],
                image: "efferalgan-czopki.jpg",
            }
        ]}, () => this.sortByRating(this.state.drugs));
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
                        <DrugList drugs={this.state.drugs}/>
                    </Card>
                </div>
            </div>
        );
    }
}
