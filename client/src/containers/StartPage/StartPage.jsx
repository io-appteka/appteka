import React from 'react';
import styles from './StartPage.css';
import { Input } from 'antd';

export class StartPage extends React.Component {
    clickHandler = (value) => {
        const { history } = this.props;
        // search propably with query parameters 
        // query params will be handled in ComponentDidMount in 
        //component attached to the listing route
        // via this.props.location.search
        //then: connection to the server via axios
        if (value !== '') {
            const queryString = `search=${encodeURIComponent(value)}`;
            history.push({
                pathname: '/listing',
                search: '?' + queryString,
            });
        }
    }

    render() {
        return(
            <div className={styles.MainPage}>
                <div className={styles.Header}>No more overpriced sheeeit, find cheap meds nearby</div>
                <div className={styles.SmallHeader}>Sheit, man, that honkey mus' be messin' my old lady got to be runnin' col' upsihd down his head!</div>
                <Input.Search
                    placeholder="enter drug name..."
                    enterButton="search"
                    onSearch={value => this.clickHandler(value)}
                />
            </div>
        );
    }
}