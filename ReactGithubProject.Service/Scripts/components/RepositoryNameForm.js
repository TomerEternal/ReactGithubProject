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
var RepositoryNameForm = /** @class */ (function (_super) {
    __extends(RepositoryNameForm, _super);
    function RepositoryNameForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: '' };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    RepositoryNameForm.prototype.handleChange = function (event) {
        this.setState({ value: event.target.value });
    };
    RepositoryNameForm.prototype.handleSubmit = function (event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };
    RepositoryNameForm.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.handleSubmit },
            React.createElement("label", null,
                "Name:",
                React.createElement("input", { type: "text", value: this.state.value, onChange: this.handleChange })),
            React.createElement("input", { type: "submit", value: "Submit" })));
    };
    return RepositoryNameForm;
}(React.Component));
exports.RepositoryNameForm = RepositoryNameForm;
//# sourceMappingURL=RepositoryNameForm.js.map