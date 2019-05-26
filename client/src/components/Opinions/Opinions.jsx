import React from 'react';
import styles from './Opinions.css';
import { Opinion } from './Opinion/Opinion';
import { Button } from 'antd';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Opinions extends React.Component {
    state = {
        opinionList : [],
        mode: 'highest',
    }

    componentDidMount() {
        this.sortByRating(this.props.opinions.opinions);
    }

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
        this.props.onSetRedirectPath('/add-opinion');
    };

    sortByRating = (opinionList) => {
        const { mode } = this.state;
        const sortedOpinions = opinionList.sort((firstOpinion, secondOpinion) => {
            if (mode === 'lowest') return firstOpinion.rating - secondOpinion.rating;
            else if (mode === 'highest') return secondOpinion.rating - firstOpinion.rating;
            else return 0;
            });
        this.setState({opinionList: sortedOpinions});
    };

    toggleSortingMode = () => {
        const { mode } = this.state;
        if (mode === 'highest') this.setState({mode: 'lowest'},() => this.sortByRating(this.state.opinionList));
        else this.setState({mode: 'highest'},() => this.sortByRating(this.state.opinionList));
    }

    render() {
        const { opinionsNumber } = this.props.opinions;
        const { opinionList } = this.state;
        return (
            <div className={styles.OpinionsField}>
                <div className={styles.Button}>
                    <NavLink onClick={this.onClickHandler}
                             to='/auth'>
                        <Button>Dodaj opinię</Button>
                    </NavLink>
                </div>
                <div className={styles.OpinionCount}>
                    <b>{opinionsNumber}</b> user(s) rated this product
                    <div className={styles.Sort}>
                        SORT BY:<button onClick={this.toggleSortingMode}>{this.state.mode === 'highest' 
                            ? 'HIGHEST RATING'
                            : 'LOWEST RATING'}</button>
                    </div>
                </div>
                <ul className={styles.Opinions}>
                    {opinionList.map(opinion => (
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