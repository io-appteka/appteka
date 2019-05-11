import React from 'react';
import { connect } from 'react-redux';

import styles from './Auth.css';
import { Input, Button } from 'antd';
import * as actions from '../../store/actions/index';

class auth extends React.Component {
    state = {
        controls: {
            email: {
                elementConfig:{
                    type: 'email',
                    placeholder: 'Email Address',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: true,
            },
            password: {
                elementConfig:{
                    type: 'password',
                    placeholder: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: true,
            },
        },
        formIsValid: false,
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (!rules){
            return isValid;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    onClickHandler = () => {
        const { controls } = this.state;
        this.props.onAuth(controls.email.value, controls.password.value);
    };

    onChangeHandler = (event, key) => {
        const updatedControls = {
            ...this.state.controls,
            [key]: {
                ...this.state.controls[key],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[key].validation),
            }
        };

        let formIsValid = true;
        for (let key in updatedControls){
            formIsValid = updatedControls[key].valid && formIsValid;
        };

        this.setState({controls: updatedControls, formIsValid});
    };

    render(){
        const { formIsValid } = this.state; 
        const formElementsArray = [];

        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key],
            })
        }

        const form = formElementsArray.map(formElement => (
            <Input
                className={formElement.config.valid ? '' : styles.Unvalid}
                key={formElement.id}
                onChange={(event) => this.onChangeHandler(event, formElement.id)}
                {...formElement.config.elementConfig}/>
        ));

        return(
            <div className={styles.Auth}>
                <form>
                    {form}
                    <Button disabled={!formIsValid} onClick={this.onClickHandler}>submit</Button>
                </form>
            </div>
        );
    };
};

const mapDispatchToPros = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
    }
}

export const Auth = connect(null,mapDispatchToPros)(auth);