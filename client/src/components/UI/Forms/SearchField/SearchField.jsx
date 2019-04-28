import React from 'react';
import styles from './SearchField.css';
import { Input, Button } from 'antd';

export class SearchField extends React.Component {
    state = {
        searchForm: {
            drug: {
                elementConfig: {
                    defaultValue: this.props.drug,
                    placeholder: 'nazwa leku',
                },
                value: this.props.drug,
                validation: {
                    required: true,
                },
                valid: true,
            },
            location: {
                elementConfig: {
                    defaultValue: this.props.location,
                    placeholder: 'lokalizacja',
                },
                value: this.props.location,
                validation: {
                    required: true,
                },
                valid: true,
            },
        },
        formIsValid: true,
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }

    onClickHandler = () => {
        const { searchForm } = this.state;
        const { history } = this.props;
        let queryString = '';
        for (let key in searchForm){
            queryString += `${queryString ? '&' : ''}${key}=${encodeURIComponent(searchForm[key].value)}`;
        }
        history.push({
            pathname: '/listing',
            search: '?' + queryString,
        });
    };

    onChangeHandler = (event, key) => {
        const updatedSearchForm = {
            ...this.state.searchForm,
        };
        const updatedFormElement = {
            ...updatedSearchForm[key],
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedSearchForm[key] = updatedFormElement;

        let formIsValid = true;
        for (let key in updatedSearchForm){
            formIsValid = updatedSearchForm[key].valid && formIsValid;
        };

        this.setState({searchForm: updatedSearchForm, formIsValid});
    };

    render() {
        const { searchForm, formIsValid } = this.state;
        const formElementsArray = [];
        for (let key in searchForm) {
            formElementsArray.push({
                id: key,
                config: searchForm[key],
            });
        };

        return (
            <div className={styles.SearchField}>
                <form>
                    {formElementsArray.map(formElement => (
                        <Input 
                        className={formElement.config.valid ? '' : styles.Unvalid}
                        key={formElement.id}
                        onChange={(event) => this.onChangeHandler(event, formElement.id)}
                        {...formElement.config.elementConfig}/>))}
                    <Button disabled={!formIsValid} onClick={this.onClickHandler}>search</Button>
                </form>
            </div>
        );
    };
}