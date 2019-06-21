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
var repository_gallery_item_1 = require("./repository-gallery-item");
var bookmarked_repositories_context_1 = require("../../contexts/bookmarked-repositories-context");
//renders provided repositories
var RepositoryGallery = /** @class */ (function (_super) {
    __extends(RepositoryGallery, _super);
    function RepositoryGallery(props) {
        return _super.call(this, props) || this;
    }
    RepositoryGallery.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" }, this.props.repositories.map(function (repository) {
                return React.createElement("div", { className: "col-md-4 my-3" },
                    React.createElement(repository_gallery_item_1.RepositoryGalleryItem, { bookmarkedRepositories: _this.context.bookmarkedRepositories, model: repository }));
            }))));
    };
    RepositoryGallery.contextType = bookmarked_repositories_context_1.BookmarkedRepositioresContext;
    return RepositoryGallery;
}(React.Component));
exports.RepositoryGallery = RepositoryGallery;
//# sourceMappingURL=repository-gallery.js.map