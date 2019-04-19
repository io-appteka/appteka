import React, { Component } from 'react';
import {Layout} from './components/Layout/Layout';
import {StartPage} from './containers/StartPage/StartPage';
import { DrugList } from './containers/DrugList/DrugList';
import { PharmacyList } from './containers/PharmacyList/PharmacyList';
import { AboutUs } from './containers/AboutUs/AboutUs';
import { SearchView } from './containers/SearchView/SearchView';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={StartPage}/>
            <Route path="/drugs" component={DrugList}/>
            <Route path="/pharmacies" component={PharmacyList}/>
            <Route path="/about" component={AboutUs}/>
            <Route path="/listing" component={SearchView}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
