import React from 'react';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './Auth.css';
import { Input, Button } from 'antd';
import * as actions from '../../store/actions/index';

class auth extends React.Component {
    state = {
        controls: {
            email: {
                elementConfig:{
                    type: 'email',
                    placeholder: 'Adres email',
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
                    placeholder: 'Hasło',
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
        isSignup: true,
    }

    componentWillReceiveProps() {
        const { pathname } = this.props.history.location;
        if (pathname === '/auth') {
            this.setState({isSignup: false});
        } else if (pathname === '/register') {
            this.setState({isSignup: true});
        }
    }
    
    componentWillMount() {
        const { pathname } = this.props.history.location;
        if (pathname === '/auth') {
            this.setState({isSignup: false});
        } else if (pathname === '/register') {
            this.setState({isSignup: true});
        }
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
        const { controls, isSignup } = this.state;
        this.props.onAuth(controls.email.value, controls.password.value, isSignup);
    };

    switchAuthModeHandler = () => {
        this.setState(prevState => ({
            isSignup: !prevState.isSignup,
        }));
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
        const { formIsValid, isSignup } = this.state; 
        const formElementsArray = [];

        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key],
            })
        }

        let form = formElementsArray.map(formElement => (
            <Input
                className={formElement.config.valid ? '' : styles.Unvalid}
                key={formElement.id}
                onChange={(event) => this.onChangeHandler(event, formElement.id)}
                {...formElement.config.elementConfig}/>
        ));

        if (this.props.loading) {
            form = <div className={styles.Spin}><Spin size="large" prefixCls='index__ant-spin'/></div>;
        }

        let errorMessage = null;
        if (this.props.error) {
            let info = 'Błąd połączenia';
            const {message} = this.props.error;
            if (message === 'EMAIL_EXISTS') {
                info = 'Podany adres istnieje';
            }
            if (message === 'EMAIL_NOT_FOUND' || message === 'INVALID_PASSWORD') {
                info = 'zły email lub login';
            }
            if (message === 'USER_DISABLED') {
                info = 'użytkownik zablokowany';
            }
            if (message === 'INVALID_EMAIL') {
                info = 'niepoprawny adres email';
            }
            errorMessage = (
                <Alert
                    prefixCls='index__ant-alert'
                    message="Błąd"
                    description={info}
                    type="error"
                    showIcon
                />
            )
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>;
        }

        let switchBtn = (<p>Don't have an account?<NavLink className={styles.Switch} to="/register">
        Register</NavLink></p>);
        if (isSignup) switchBtn = (<p>Already have an account?<NavLink className={styles.Switch} to="/auth">
        Log in</NavLink></p>);
        return(
            <div className={styles.Auth}>
                {authRedirect}
                <form>
                    <h1>{isSignup ? 'Registration form' : 'Log in to Appteka'}</h1>
                    {errorMessage}
                    {form}
                    <Button className={styles.Register} disabled={!formIsValid} onClick={this.onClickHandler}>{isSignup ? 'Create an account' : 'Log in'}</Button>
                    {switchBtn}
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
    };
};

const mapDispatchToPros = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    }
}

export const Auth = connect(mapStateToProps,mapDispatchToPros)(auth);