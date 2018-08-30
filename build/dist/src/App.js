"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./App.css");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "container", style: { paddingTop: 15 } },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6" },
                    React.createElement("h1", null, "\u6620\u50CF\u7B14\u8BB0")),
                React.createElement("div", { className: "col-md-6 header-right" },
                    React.createElement("button", { type: "button", className: "btn btn-primary" }, "\u521B\u5EFA\u7B14\u8BB0"))),
            React.createElement("hr", null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-4" }, "\u5217\u8868"),
                React.createElement("div", { className: "col-md-8" }, "\u5185\u5BB9"))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map