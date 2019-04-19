import React from 'react';
import styles from './StartPage.css';
import { Input } from 'antd';

export class StartPage extends React.Component {
    render() {
        return(
            <>
                <div className={styles.Header}>No more overpriced sheeeit, find cheap meds nearby</div>
                <div className={styles.SmallHeader}>Sheit, man, that honkey mus' be messin' my old lady got to be runnin' col' upsihd down his head!</div>
                <Input.Search
                    placeholder="enter drug name..."
                    enterButton="search"
                    onSearch={value => console.log(value)}
                />
            </>
        );
    }
}