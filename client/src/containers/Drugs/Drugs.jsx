import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './Drugs.css';
import { SearchField } from '../../components/UI/Forms/SearchField/SearchField';
import { DrugList } from '../../components/Lists/DrugList/DrugList';
import { Tag } from '../../components/UI/Tag/Tag';

export class Drugs extends React.Component {
     state = {
        query: {
            drug: null,
            location: 'Krakow, Poland',
        },
        isInput: false,
        tags: [],
        drugs: []
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
                name: "Prednizon1",
                desc: "Prednizon1 jest hormonem kortykosteroidowym, syntetyczną pochodną kortyzonu, wykazującą działanie przeciwzapalne, przeciwalergiczne dłuższe i ok. 3,5 razy silniejsze niż kortyzon, natomiast słabsze działanie mineralotropowe.",
                rating: 3.5,
                opinionsNumber: 71,
                tags: ["alergia", "oddychanie", "skóra"],
                image: "prednizon.jpg",
            },
            {
                name: "Prednizon2",
                desc: "Prednizon2 jest hormonem kortykosteroidowym, syntetyczną pochodną kortyzonu, wykazującą działanie przeciwzapalne, przeciwalergiczne dłuższe i ok. 3,5 razy silniejsze niż kortyzon, natomiast słabsze działanie mineralotropowe.",
                rating: 0.5,
                opinionsNumber: 12,
                tags: ["higiena nosa", "probiotyk", "skóra"],
                image: "prednizon.jpg",
            },
            {
                name: "Prednizon3",
                desc: "Prednizon3 jest hormonem kortykosteroidowym, syntetyczną pochodną kortyzonu, wykazującą działanie przeciwzapalne, przeciwalergiczne dłuższe i ok. 3,5 razy silniejsze niż kortyzon, natomiast słabsze działanie mineralotropowe.",
                rating: 5.0,
                opinionsNumber: 89,
                tags: ["obrzęk", "oddychanie", "ból"],
                image: "prednizon.jpg",
            },
            {
                name: "Prednizon4",
                desc: "Prednizon4 jest hormonem kortykosteroidowym, syntetyczną pochodną kortyzonu, wykazującą działanie przeciwzapalne, przeciwalergiczne dłuższe i ok. 3,5 razy silniejsze niż kortyzon, natomiast słabsze działanie mineralotropowe.",
                rating: 2.5,
                opinionsNumber: 33,
                tags: ["alergia", "oddychanie", "bardzo boli"],
                image: "prednizon.jpg",
            }
        ]});
    };

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
                            {this.state.tags && this.state.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                        </div>
                        <DrugList drugs={this.state.drugs}/>
                    </Card>
                </div>
            </div>
        );
    }
}
