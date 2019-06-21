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
var repository_gallery_1 = require("./repository/repository-gallery");
// bookmarks page
var Bookmarks = /** @class */ (function (_super) {
    __extends(Bookmarks, _super);
    function Bookmarks(props, context) {
        return _super.call(this, props, context) || this;
    }
    Bookmarks.prototype.componentDidMount = function () {
        //this ensures the bookmarks are loaded to the context when the page loads
        this.context.refreshBookmarkedRepositories();
    };
    Bookmarks.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(repository_gallery_1.RepositoryGallery, { repositories: this.context.bookmarkedRepositories })));
    };
    Bookmarks.contextType = bookmarked_repositories_context_1.BookmarkedRepositioresContext;
    return Bookmarks;
}(React.Component));
exports.Bookmarks = Bookmarks;
//# sourceMappingURL=bookmarks.js.map