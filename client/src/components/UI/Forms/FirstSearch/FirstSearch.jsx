import React from 'react';
import styles from './FirstSearch.css';
import { AutoComplete, Button } from 'antd';

export class FirstSearch extends React.Component {
    state = {
        value: '',
    }
    
    filterFunction = (inputValue, option) => {
        return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
     };
 
    render() {
        const {data, onClick} = this.props;
        return(
            <div className={styles.FirstSearch}>
            <AutoComplete 
            prefixCls='index__ant-select'
            dataSource={data}
            style={{ width: 358, height: 59}}
            filterOption={(inputValue, option) => this.filterFunction(inputValue,option)}
            placeholder="Enter drug name..."
            onChange = {(value) => this.setState({value: value})}
            />
            <Button onClick={() => onClick(this.state.value)}>search</Button>
            </div>
        );
    }
}

/* <Input.Search
placeholder="enter drug name..."
enterButton="search"
onSearch={value => this.clickHandler(value)}
/> */