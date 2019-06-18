import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import {Layout} from './components/Layout/Layout';
import {StartPage} from './containers/StartPage/StartPage';
import { Drugs } from './containers/Drugs/Drugs';
import { PharmacyList } from './containers/PharmacyList/PharmacyList';
import { AboutUs } from './containers/AboutUs/AboutUs';
import { SearchView } from './containers/SearchView/SearchView';
import { Auth } from './containers/Auth/Auth';
import { Logout } from './containers/Auth/Logout/Logout';
import { Profile } from './containers/Profile/Profile';
import * as actions from './store/actions/index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faMapMarkerAlt);

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSingup();
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={StartPage}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/register" component={Auth}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/drugs" component={Drugs}/>
            <Route path="/pharmacies" component={PharmacyList}/>
            <Route path="/about" component={AboutUs}/>
            <Route path="/listing" component={SearchView}/>
            <Route path="/profile" component={Profile}/>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = dispatch => ({
  onTryAutoSingup: () => dispatch(actions.authCheckState()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
