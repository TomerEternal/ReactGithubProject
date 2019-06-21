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
var Page;
(function (Page) {
    Page[Page["search"] = 0] = "search";
    Page[Page["bookmarks"] = 1] = "bookmarks";
})(Page = exports.Page || (exports.Page = {}));
//renders a single nav button
var NavbarItem = /** @class */ (function (_super) {
    __extends(NavbarItem, _super);
    function NavbarItem(props) {
        return _super.call(this, props) || this;
    }
    NavbarItem.prototype.render = function () {
        var _this = this;
        return (React.createElement("li", { className: "nav-item " + (this.props.page === this.props.activePage ? 'active' : '') },
            React.createElement("a", { className: "nav-link", onClick: function () { return _this.props.setPage(_this.props.page); }, href: "#" }, this.props.text)));
    };
    return NavbarItem;
}(React.Component));
exports.NavbarItem = NavbarItem;
//# sourceMappingURL=navbar-item.js.map