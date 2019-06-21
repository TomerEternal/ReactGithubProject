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
var bookmarked_repositories_context_1 = require("../contexts/bookmarked-repositories-context");
var search_1 = require("./search");
var bookmarks_1 = require("./bookmarks");
var navbar_item_1 = require("./navigation/navbar-item");
var navbar_1 = require("./navigation/navbar");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.setPage = function (page) {
            _this.setState({ activePage: page });
        };
        _this.state = {
            activePage: navbar_item_1.Page.search,
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "h-100 w-100 d-flex flex-column" },
                React.createElement(navbar_1.Navbar, { setPage: this.setPage, activePage: this.state.activePage }),
                React.createElement(bookmarked_repositories_context_1.BookmarkedRepositoriesProvider, null, (function () {
                    //renders the appropriate page based on the currently active page
                    switch (_this.state.activePage) {
                        case navbar_item_1.Page.search:
                            return React.createElement(search_1.Search, null);
                        case navbar_item_1.Page.bookmarks:
                            return React.createElement(bookmarks_1.Bookmarks, null);
                        default:
                    }
                })()),
                React.createElement("footer", { className: "mt-auto py-3 bg-white" },
                    React.createElement("div", { className: "container" },
                        React.createElement("span", { className: "text-muted" }, "Made by Tomer H."))))));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=app.js.map