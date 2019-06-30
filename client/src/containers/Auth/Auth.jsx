import React from 'react';
import { connect } from 'react-redux';
import { Spin, Alert } from 'antd';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './Auth.css';
import { Input, Button } from 'antd';
import * as actions from '../../store/actions/index';
import axios from 'axios';

class auth extends React.Component {
    state = {
        controls: {
            email: {
                elementConfig:{
                    type: 'email',
                    placeholder: 'Adres e-mail',
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
        signupControls: {
            login: {
                elementConfig:{
                    type: 'text',
                    placeholder: 'Nazwa użytkownika',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: true,
            },
            email: {
                elementConfig:{
                    type: 'email',
                    placeholder: 'Adres e-mail',
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
        const { controls, signupControls, isSignup } = this.state;
        if (isSignup) {
            this.props.onAuth(signupControls.email.value, signupControls.password.value, isSignup);
            setTimeout( () =>
                axios.post('https://apteka.azurewebsites.net/api/users', {
                login: signupControls.login.value,
                id: this.props.userId,
                location: 'Krakow',
                }).then((response) => console.log(response))
            ,5000)
        } else {
            this.props.onAuth(controls.email.value, controls.password.value, isSignup);
        }
    };

    switchAuthModeHandler = () => {
        this.setState(prevState => ({
            isSignup: !prevState.isSignup,
        }));
    };

    onChangeHandler = (event, key) => {
        const { isSignup } = this.state;
        const controls = isSignup ? this.state.signupControls : this.state.controls;
        const updatedControls = {
            ...controls,
            [key]: {
                ...controls[key],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, controls[key].validation),
            }
        };

        let formIsValid = true;
        for (let key in updatedControls){
            formIsValid = updatedControls[key].valid && formIsValid;
        };

        if (isSignup) this.setState({signupControls: updatedControls, formIsValid});
        else this.setState({controls: updatedControls, formIsValid});
    };

    render(){
        const { formIsValid, isSignup } = this.state;
        const formElementsArray = [];

        if (isSignup) {
            for (let key in this.state.signupControls) {
                formElementsArray.push({
                    id: key,
                    config: this.state.signupControls[key],
                })
            }
        } else {
            for (let key in this.state.controls) {
                formElementsArray.push({
                    id: key,
                    config: this.state.controls[key],
                })
            }
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

        let switchBtn = (<p>Nie masz konta?<NavLink className={styles.Switch} to="/register">
        Załóż konto</NavLink></p>);
        if (isSignup) switchBtn = (<p>Masz już konto?<NavLink className={styles.Switch} to="/auth">
        Zaloguj się</NavLink></p>);
        return(
            <div className={styles.Auth}>
                {authRedirect}
                <form>
                    <h1>{isSignup ? 'Rejestracja' : 'Logowanie'}</h1>
                    {errorMessage}
                    {form}
                    <Button className={styles.Register} disabled={!formIsValid} onClick={this.onClickHandler}>{isSignup ? 'Załóż konto' : 'Zaloguj się'}</Button>
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
        userId: state.auth.userId,
    };
};

const mapDispatchToPros = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
    }
}

export const Auth = connect(mapStateToProps,mapDispatchToPros)(auth);
