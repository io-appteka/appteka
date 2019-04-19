import React, { Component } from 'react';
import {Layout} from './components/Layout/Layout';
import {StartPage} from './containers/StartPage/StartPage';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <StartPage/>
        </Layout>
      </div>
    );
  }
}

export default App;
