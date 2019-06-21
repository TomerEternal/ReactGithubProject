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
var repositories_context_1 = require("../contexts/repositories-context");
var reactstrap_1 = require("reactstrap");
var RepositoryFooter = /** @class */ (function (_super) {
    __extends(RepositoryFooter, _super);
    function RepositoryFooter(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(RepositoryFooter.prototype, "pageAmout", {
        get: function () {
            return Math.ceil(this.context.totalRepositories / 12);
        },
        enumerable: true,
        configurable: true
    });
    RepositoryFooter.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(reactstrap_1.Pagination, null,
                React.createElement("h1", null,
                    "total pages: ",
                    this.pageAmout),
                this.context.totalRepositories != 0 && this.context.page < this.pageAmout &&
                    React.createElement(reactstrap_1.PaginationItem, null,
                        React.createElement(reactstrap_1.PaginationLink, { onClick: this.context.pageDown, first: true })),
                this.pageAmout > this.context.page &&
                    React.createElement(reactstrap_1.PaginationItem, null,
                        React.createElement(reactstrap_1.PaginationLink, { onClick: this.context.pageUp, last: true })))));
    };
    RepositoryFooter.contextType = repositories_context_1.RepositioresContext;
    return RepositoryFooter;
}(React.Component));
exports.RepositoryFooter = RepositoryFooter;
//# sourceMappingURL=repository-footer.js.map