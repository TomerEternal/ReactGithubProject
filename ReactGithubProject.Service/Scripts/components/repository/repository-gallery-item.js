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
var reactstrap_1 = require("reactstrap");
var bookmarked_repositories_context_1 = require("../../contexts/bookmarked-repositories-context");
var BookmarkingService_1 = require("../../infrastructure/bookmarking/BookmarkingService");
//renders single repository
var RepositoryGalleryItem = /** @class */ (function (_super) {
    __extends(RepositoryGalleryItem, _super);
    function RepositoryGalleryItem(props) {
        var _this = _super.call(this, props) || this;
        _this.bookmarkingService = new BookmarkingService_1.BookmarkingService();
        _this.checkIfBookmarked = function (repositoryModel) {
            var bookmarkedRepository = repositoryModel
                .find(function (bookmarkedRepository) {
                return bookmarkedRepository && bookmarkedRepository.url === _this.props.model.url;
            });
            return bookmarkedRepository != null;
        };
        _this.handleBookmarking = function () {
            _this.bookmarkingService.bookmarkRepository(_this.props.model);
            _this.context.refreshBookmarkedRepositories();
        };
        return _this;
    }
    RepositoryGalleryItem.prototype.render = function () {
        return (React.createElement("div", { className: "card border border-dark bg-dark text-white" },
            React.createElement("img", { src: this.props.model.authorAvatarUrl, className: "card-img-top bg-white" }),
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement("a", { href: this.props.model.url },
                    React.createElement(reactstrap_1.CardTitle, null, this.props.model.name))),
            React.createElement(reactstrap_1.CardFooter, null,
                React.createElement(reactstrap_1.CardText, null,
                    React.createElement("div", { className: "d-flex justify-content-between align-items-end" },
                        React.createElement("small", { className: "text-muted" },
                            "created by ",
                            this.props.model.author),
                        React.createElement("div", null,
                            React.createElement(reactstrap_1.Button, { onClick: this.handleBookmarking, size: "sm", color: "primary", disabled: this.checkIfBookmarked(this.props.bookmarkedRepositories) }, this.checkIfBookmarked(this.props.bookmarkedRepositories) ?
                                React.createElement(React.Fragment, null,
                                    "bookmarked ",
                                    React.createElement("i", { className: "fa fa-check" }))
                                :
                                    React.createElement(React.Fragment, null,
                                        "bookmark ",
                                        React.createElement("i", { className: "fa fa-bookmark" })))))))));
    };
    RepositoryGalleryItem.contextType = bookmarked_repositories_context_1.BookmarkedRepositioresContext;
    return RepositoryGalleryItem;
}(React.Component));
exports.RepositoryGalleryItem = RepositoryGalleryItem;
//# sourceMappingURL=repository-gallery-item.js.map