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
var BookmarkingService_1 = require("../infrastructure/bookmarking/BookmarkingService");
var RepositoryGalleryItem = /** @class */ (function (_super) {
    __extends(RepositoryGalleryItem, _super);
    function RepositoryGalleryItem(props) {
        var _this = _super.call(this, props) || this;
        _this.bookmarkingService = new BookmarkingService_1.BookmarkingService();
        _this.checkIfBookmarked = function (repositoryModel) {
            console.log(repositoryModel);
            var bookmarkedRepository = repositoryModel
                .find(function (bookmarkedRepository) {
                // console.log(bookmarkedRepository.url, this.props.url, bookmarkedRepository.url === this.props.url);
                return bookmarkedRepository && bookmarkedRepository.url === _this.props.url;
            });
            return bookmarkedRepository != null;
        };
        _this.handleBookmarking = function () {
            _this.bookmarkingService.bookmarkRepository(_this.props);
            _this.context.getBookmarkedRepositories();
        };
        return _this;
    }
    RepositoryGalleryItem.prototype.render = function () {
        var _this = this;
        return (React.createElement(repositories_context_1.RepositioresContext.Consumer, null, (function (_a) {
            var bookmarkedRepositories = _a.bookmarkedRepositories;
            return (React.createElement(reactstrap_1.Card, { inverse: true, style: { backgroundColor: '#333', borderColor: '#333' } },
                _this.checkIfBookmarked(bookmarkedRepositories) ? 'test' : 'bla',
                React.createElement("img", { src: _this.props.authorAvatarUrl, className: "card-img-top bg-white" }),
                React.createElement(reactstrap_1.CardBody, null,
                    React.createElement("a", { href: _this.props.url },
                        React.createElement(reactstrap_1.CardTitle, null, _this.props.name))),
                React.createElement(reactstrap_1.CardFooter, null,
                    React.createElement(reactstrap_1.CardText, null,
                        React.createElement("div", { className: "d-flex justify-content-between align-items-end" },
                            React.createElement("small", { className: "text-muted" },
                                "created by ",
                                _this.props.author),
                            React.createElement("div", null,
                                React.createElement(reactstrap_1.Button, { onClick: _this.handleBookmarking, size: "sm", color: "primary", disabled: _this.checkIfBookmarked(bookmarkedRepositories) }, _this.checkIfBookmarked(bookmarkedRepositories) ?
                                    React.createElement(React.Fragment, null,
                                        "bookmarked ",
                                        React.createElement("i", { className: "fa fa-check" }))
                                    :
                                        React.createElement(React.Fragment, null,
                                            "bookmark ",
                                            React.createElement("i", { className: "fa fa-bookmark" })))))))));
        })));
    };
    RepositoryGalleryItem.contextType = repositories_context_1.RepositioresContext;
    return RepositoryGalleryItem;
}(React.Component));
exports.RepositoryGalleryItem = RepositoryGalleryItem;
//# sourceMappingURL=repository-gallery-item.js.map