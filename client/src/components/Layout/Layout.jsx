import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import styles from './Layout.css';
import {Toolbar} from '../Navigation/Toolbar/Toolbar';

class layout extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div className={styles.Layout}>
                <Toolbar 
                    isAuth={this.props.isAuthenticated} 
                    onLogin={() => this.props.onSetRedirectPath('/')}/>
                <main className={styles.Content}>{children}</main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = dispatch => {
    return {
        onSetRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
    };
};

export const Layout = connect(mapStateToProps, mapDispatchToProps)(layout);