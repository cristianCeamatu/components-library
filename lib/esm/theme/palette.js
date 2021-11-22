var createPalette = function (palette) {
    var _a = palette.white, white = _a === void 0 ? '#fff' : _a, _b = palette.grey, grey = _b === void 0 ? '#f7f9fa' : _b, _c = palette.black, black = _c === void 0 ? '#222' : _c, _d = palette.primary, primary = _d === void 0 ? '#2d9cdb' : _d, _e = palette.secondary, secondary = _e === void 0 ? '#5e72e4' : _e, _f = palette.danger, danger = _f === void 0 ? '#eb5757' : _f, _g = palette.success, success = _g === void 0 ? '#27ae60' : _g, _h = palette.info, info = _h === void 0 ? '#6bb2da' : _h, _j = palette.warning, warning = _j === void 0 ? '#fcb400' : _j;
    return {
        white: white,
        grey: grey,
        black: black,
        primary: primary,
        secondary: secondary,
        danger: danger,
        success: success,
        info: info,
        warning: warning,
    };
};
export default createPalette;
