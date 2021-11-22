"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var palette_1 = __importDefault(require("./palette"));
var typography_1 = __importDefault(require("./typography"));
var spacing_1 = __importDefault(require("./spacing"));
var misc_1 = __importDefault(require("./misc"));
var createTheme = function (options) {
    var _a = options || {}, _b = _a.palette, paletteInput = _b === void 0 ? {} : _b, _c = _a.typography, typographyInput = _c === void 0 ? {} : _c;
    var palette = (0, palette_1.default)(paletteInput);
    var typography = (0, typography_1.default)(typographyInput);
    return {
        palette: palette,
        spacing: spacing_1.default,
        typography: typography,
        misc: misc_1.default,
    };
};
exports.default = createTheme;
