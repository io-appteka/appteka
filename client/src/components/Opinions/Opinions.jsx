import React from 'react';
import styles from './Opinions.css';
import { Opinion } from './Opinion/Opinion';
import { Button, Icon } from 'antd';
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
    };

    componentDidMount() {
        this.sortByRating(this.props.opinions.opinions);
    };

    onClickHandler = () => {
        this.setState((prevState) => ({modal: {...prevState.modal, show: true}}));
    };

    onOkHandler = (data) => {
        //async
        //posting to the server
        //co potrzebujemy do posta?
        //userId - redux store
        //ocena i opinie - data z funkcji - opinia mozna wywolac trim zeby obciac spacje
        //idLeku -> musimy brac z comp. searchview
        if (data.rate === 0) {
            alert("Wystaw ocenę");
        } else if (data.opinion === '') {
            alert("Wystaw opinię");
        } else {
            this.setState((prevState) => ({modal: {...prevState.modal, loading: true}}));
        }
    };

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
    };

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
                <div className={styles.FlexBox}>
                    <div>
                        <b>{opinionsNumber}</b> użytkowników oceniło ten produkt
                    </div>
                    <div className={styles.Sort}>
                        Sortuj według:<button onClick={this.toggleSortingMode} className={styles.SortButton}>
                            {this.state.mode === 'highest'
                            ? (<span>OCENA ROSNĄCO <Icon type="arrow-up"/></span>)
                            : (<span>OCENA MALEJĄCO <Icon type="arrow-down"/></span>)}</button>
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
    };
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
