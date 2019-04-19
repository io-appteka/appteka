import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './SearchView.css';
import { SearchField } from '../../components/UI/SearchField/SearchField';

export class SearchView extends React.Component {
    state = {
        query: {
            drug: null,
            location: 'Krakow, Poland',
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const queryContent = {};
        for (let param of query.entries()){
            queryContent[param[0]] = param[1];
        }
        this.setState({query: queryContent});
    }

    render() {
        return (
            <div className={styles.SearchView}>
                <Card>
                    <SearchField
                        drug={this.state.query.drug}
                        location={this.state.query.location}
                    />
                    SearchView
                </Card>
            </div>
        );
    }
}