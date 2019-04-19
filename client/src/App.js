import React, { Component } from 'react';
import {Layout} from './components/Layout/Layout';
import {StartPage} from './containers/StartPage/StartPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={StartPage}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
