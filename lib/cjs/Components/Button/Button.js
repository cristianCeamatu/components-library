"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var noop = function () { };
var RootStyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0px 20px;\n  height: 49px;\n  border-radius: 2px;\n  border: 2px solid #3d5567;\n  display: inline-flex;\n  background-color: ", ";\n"], ["\n  padding: 0px 20px;\n  height: 49px;\n  border-radius: 2px;\n  border: 2px solid #3d5567;\n  display: inline-flex;\n  background-color: ", ";\n"])), function (props) { return (props.disabled ? 'red' : 'blue'); });
var ButtonSpan = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: auto;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n"], ["\n  margin: auto;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  color: #fff;\n  text-transform: uppercase;\n"
    /*
     * If you opt to do export default, you'll still need to have this
     * export for the TsDocGen work properly (I struggled to find this out)
     */
])));
/*
 * If you opt to do export default, you'll still need to have this
 * export for the TsDocGen work properly (I struggled to find this out)
 */
var Button = function (props) {
    var children = props.children, onClick = props.onClick, _a = props.disabled, disabled = _a === void 0 ? false : _a;
    return (React.createElement(RootStyledButton, { disabled: disabled, onClick: !disabled ? onClick : noop },
        React.createElement(ButtonSpan, null, children)));
};
exports.Button = Button;
var templateObject_1, templateObject_2;
