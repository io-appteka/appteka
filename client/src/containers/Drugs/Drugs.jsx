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
        tags: []
    };

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const queryContent = {};
        for (let param of query.entries()){
            queryContent[param[0]] = param[1];
        }
        this.setState({query: queryContent, isInput: true});

        this.setState({tags: ["alergia", "oddychanie", "skóra", "bardzo boli", "atopowe zapalenie skóry", "ból", "obrzęk", "jaskra", "wzdęcia", "higiena nosa", "probiotyk", "witamina C"]});
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
                        <DrugList/>
                    </Card>
                </div>
            </div>
        );
    }
}
