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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var repository_name_form_1 = require("./repository/repository-name-form");
var GithubService_1 = require("../infrastructure/repositories/GithubService");
var repository_gallery_1 = require("./repository/repository-gallery");
// search page
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        var _this = _super.call(this, props) || this;
        _this.githubService = new GithubService_1.GithubService();
        //gets the repositories from github
        _this.searchRepository = function (repositoryName, page) {
            if (page === void 0) { page = 1; }
            return __awaiter(_this, void 0, void 0, function () {
                var repositories;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!repositoryName) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.githubService
                                    .getRepositories(repositoryName, page)];
                        case 1:
                            repositories = _a.sent();
                            this.setState({
                                repositories: repositories || [],
                            });
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        _this.state = {
            repositories: []
        };
        return _this;
    }
    Search.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(repository_name_form_1.RepositoryNameForm, { search: this.searchRepository }),
            React.createElement(repository_gallery_1.RepositoryGallery, { repositories: this.state.repositories })));
    };
    return Search;
}(React.Component));
exports.Search = Search;
//# sourceMappingURL=search.js.map