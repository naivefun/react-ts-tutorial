"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap");
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var rootEl = document.getElementById('root');
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(App_1.default, null)), rootEl);
if (module.hot) {
    module.hot.accept('./App', function () {
        var NextApp = require('./App').default;
        ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(NextApp, null)), rootEl);
    });
}
//# sourceMappingURL=index.js.map