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
var navbar_item_1 = require("./navbar-item");
//renders all nav buttons
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar(props) {
        return _super.call(this, props) || this;
    }
    Navbar.prototype.render = function () {
        return (React.createElement("nav", { className: "navbar navbar-expand navbar-dark bg-dark" },
            React.createElement("span", { className: "navbar-brand" }, "React Github Project"),
            React.createElement("ul", { className: "navbar-nav" },
                React.createElement(navbar_item_1.NavbarItem, { text: "Search", page: navbar_item_1.Page.search, activePage: this.props.activePage, setPage: this.props.setPage }),
                React.createElement(navbar_item_1.NavbarItem, { text: "Bookmarks", page: navbar_item_1.Page.bookmarks, activePage: this.props.activePage, setPage: this.props.setPage }))));
    };
    return Navbar;
}(React.Component));
exports.Navbar = Navbar;
//# sourceMappingURL=navbar.js.map