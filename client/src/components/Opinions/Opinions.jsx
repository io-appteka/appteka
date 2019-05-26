import React from 'react';
import styles from './Opinions.css';
import { Opinion } from './Opinion/Opinion';
import { Button } from 'antd';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import { AddOpinion } from './AddOpinion/AddOpinion';

class Opinions extends React.Component {
    state = {
        opinionList : [],
        mode: 'highest',
        modal: {
            show: false,
            loading: false,
        },
    }

    componentDidMount() {
        this.sortByRating(this.props.opinions.opinions);
    }

    onClickHandler = () => {
        this.setState((prevState) => ({modal: {...prevState.modal, show: true}}));
    };

    onOkHandler = () => {
        //async
        //posting to the server
        this.setState((prevState) => ({modal: {...prevState.modal, loading: true}}));
    }

    onCancelHandler = () => this.setState({modal: {loading: false, show: false}});

    sortByRating = (opinionList) => {
        const { mode } = this.state;
        const sortedOpinions = opinionList.sort((firstOpinion, secondOpinion) => {
            if (mode === 'highest') return firstOpinion.rating - secondOpinion.rating;
            else if (mode === 'lowest') return secondOpinion.rating - firstOpinion.rating;
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
        const { opinionList, modal } = this.state;
        return (
            <div className={styles.OpinionsField}>
                <div className={styles.Button}>
                    { this.props.isAuthenticated && <Button onClick={this.onClickHandler}>Dodaj opinię</Button>}
                    <AddOpinion
                    modal={modal}
                    onCancelHandler={this.onCancelHandler}
                    onOkHandler={this.onOkHandler}/>
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