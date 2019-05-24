import React from 'react';
import styles from './Opinions.css';
import {Opinion} from './Opinion/Opinion';
import {Button} from "antd";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class Opinions extends React.Component {

    onClickHandler = () => {
        // const {searchForm} = '';
        // const {history} = '';
        // let queryString = '';
        // for (let key in searchForm) {
        //     queryString += `${queryString ? '&' : ''}${key}=${encodeURIComponent('')}`;
        // }
        // history.push({
        //     pathname: '/listing',
        //     search: '?' + queryString,
        // });
        this.props.onSetRedirectPath('/opinion');
    };

    sortByRating = () => {
        const {opinions} = this.props.opinions.opinion.rating;
        opinions.sort((a, b) => a - b).reverse();
        this.setProps({ opinions });
    };

    render() {

        return (
            <div>
                <div className={styles.Button}>
                    <NavLink onClick={this.onClickHandler}
                             to='/auth'>
                        <Button disabled={false}>Dodaj opinię</Button>
                    </NavLink>
                </div>
                <div className={styles.OpinionCount}>
                    <b>&nbsp;{this.props.desc.opinionsNumber}</b> user(s) rated this product
                    <div className={styles.Sort}>
                        SORT BY:&nbsp;<button onClick={this.sortByRating}>HIGHEST RATING</button>
                    </div>
                </div>
                <ul className={styles.Opinions}>
                    {this.props.opinions.map(opinion => (
                        <Opinion
                            key={opinion.opinionId}
                            author={opinion.author}
                            date={opinion.date}
                            text={opinion.text}
                            rating={opinion.rating}
                        />))}
                </ul>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
    };
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Opinions);