"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = exports.ThemeProvider = void 0;
var react_1 = __importDefault(require("react"));
var SayHello = function (_a) {
    var name = _a.name;
    return (react_1.default.createElement("div", null,
        "Hey ",
        name,
        ", say hello to TypeScript."));
};
exports.default = SayHello;
var styled_components_1 = require("styled-components");
Object.defineProperty(exports, "ThemeProvider", { enumerable: true, get: function () { return styled_components_1.ThemeProvider; } });
var theme_1 = require("./theme");
Object.defineProperty(exports, "createTheme", { enumerable: true, get: function () { return __importDefault(theme_1).default; } });
__exportStar(require("./Components/Button/Button"), exports);
