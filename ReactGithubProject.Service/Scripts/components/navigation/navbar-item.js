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
var react_router_dom_1 = require("react-router-dom");
var Page;
(function (Page) {
    Page["search"] = "/search/";
    Page["bookmarks"] = "/bookmarks/";
})(Page = exports.Page || (exports.Page = {}));
//renders a single nav button
var NavbarItem = /** @class */ (function (_super) {
    __extends(NavbarItem, _super);
    function NavbarItem(props) {
        return _super.call(this, props) || this;
    }
    NavbarItem.prototype.render = function () {
        return (React.createElement(react_router_dom_1.NavLink, { to: this.props.page, className: "nav-item", activeClassName: "active" },
            this.props.text,
            " ")
        // <li>
        //     <NavLink className="nav-item" activeClassName="active" to={this.props.page}>{this.props.text}</NavLink>
        // </li>
        );
    };
    return NavbarItem;
}(React.Component));
exports.NavbarItem = NavbarItem;
//# sourceMappingURL=navbar-item.js.map