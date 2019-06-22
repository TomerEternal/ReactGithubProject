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
//search form
var RepositoryNameForm = /** @class */ (function (_super) {
    __extends(RepositoryNameForm, _super);
    function RepositoryNameForm(props) {
        var _this = _super.call(this, props) || this;
        //basic controlled component input pattern
        _this.handleChange = function (event) {
            _this.setState({ repositoryName: event.target.value });
        };
        _this.handleSubmit = function (event) {
            event.preventDefault();
            _this.props.search(_this.state.repositoryName);
        };
        //since this is a search component it only needs to keep the current name
        _this.state = { repositoryName: '' };
        return _this;
    }
    RepositoryNameForm.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "jumbotron position-relative" },
                React.createElement("video", { className: "card-img-overlay p-0 h-100 w-100", 
                    // no objectFit class in bootstrap
                    style: { objectFit: 'cover' }, id: "video-background", muted: true, autoPlay: true, loop: true },
                    React.createElement("source", { src: window.location.origin + "/videos/earth.mp4", type: "video/mp4" })),
                React.createElement(reactstrap_1.Form, { onSubmit: this.handleSubmit },
                    React.createElement(reactstrap_1.FormGroup, null,
                        React.createElement(reactstrap_1.InputGroup, null,
                            React.createElement(reactstrap_1.Input, { value: this.state.repositoryName, onChange: this.handleChange, type: "text", placeholder: "please enter a github repository name" }),
                            React.createElement(reactstrap_1.InputGroupAddon, { addonType: "append" },
                                React.createElement(reactstrap_1.Button, null, "Search"))))))));
    };
    return RepositoryNameForm;
}(React.Component));
exports.RepositoryNameForm = RepositoryNameForm;
//# sourceMappingURL=repository-name-form.js.map