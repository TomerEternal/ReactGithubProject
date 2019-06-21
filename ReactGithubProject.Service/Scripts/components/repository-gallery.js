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
var repository_gallery_item_1 = require("./repository-gallery-item");
var RepositoryGallery = /** @class */ (function (_super) {
    __extends(RepositoryGallery, _super);
    function RepositoryGallery(props) {
        return _super.call(this, props) || this;
    }
    RepositoryGallery.prototype.render = function () {
        var _this = this;
        return (React.createElement(repositories_context_1.RepositioresContext.Consumer, null, (function (_a) {
            var repositories = _a.repositories;
            return (React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" }, _this.context.repositories.map(function (repository) {
                    return React.createElement("div", { className: "col-md-4 my-3" },
                        React.createElement(repository_gallery_item_1.RepositoryGalleryItem, { name: repository.name, author: repository.owner.login, authorAvatarUrl: repository.owner.avatar_url, url: repository.html_url }));
                }))));
        })));
    };
    RepositoryGallery.contextType = repositories_context_1.RepositioresContext;
    return RepositoryGallery;
}(React.Component));
exports.RepositoryGallery = RepositoryGallery;
//# sourceMappingURL=repository-gallery.js.map