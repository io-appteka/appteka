import React from 'react';
import { connect } from 'react-redux';
import styles from './Layout.css';
import {Toolbar} from '../Navigation/Toolbar/Toolbar';

class layout extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div className={styles.Layout}>
                <Toolbar isAuth={this.props.isAuthenticated}/>
                <main className={styles.Content}>{children}</main>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token !== null,
});

export const Layout = connect(mapStateToProps)(layout);