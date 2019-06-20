import React, {useState} from 'react';
import styles from './MultiSelect.css';
import { Select, Button } from 'antd';

const { Option } = Select;
export const MultiSelect = ({data, onClick, ...other}) => {
    const [values, setValues] = useState([]);

    const onChangeHandler = (value) => {
        setValues(value)
    }

    const children = data.map(item => <Option key={item.id}>{item.name}</Option>)
    return (
        <div className={styles.MultiSelect}>
            <Select
            prefixCls={'index__ant-select'}
            mode="multiple"
            style={{ width: 358, height: 59}}
            {...other}
            onChange={onChangeHandler}
            >
                {children}
            </Select>
            <Button onClick={()=>onClick(values)}>Szukaj</Button>
    </div>
    )
};