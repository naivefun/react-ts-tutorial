import * as React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import AppHeader from './AppHeader';
import { AppFooter } from './AppFooter';

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: 15 }}>
        <AppHeader title="印象笔记" />
        <hr />
        <div className="row">
          <div className="col-md-4">列表</div>
          <div className="col-md-8">内容</div>
        </div>
        <hr />
        <AppFooter />
      </div>
    );
  }
}

export default App;
