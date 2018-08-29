import * as React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: 15 }}>
        <div className="row">
          <div className="col-md-6">
            <h1>映像笔记</h1>
          </div>
          <div className="col-md-6 header-right">
            <button type="button" className="btn btn-primary">
              创建笔记
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">列表</div>
          <div className="col-md-8">内容</div>
        </div>
      </div>
    );
  }
}

export default App;
