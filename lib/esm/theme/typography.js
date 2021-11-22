var defaultFontFamily = "'PX Grotesk', sansSerif";
var createTypography = function (typography) {
    var _a = typography.fontFamily, fontFamily = _a === void 0 ? defaultFontFamily : _a, 
    /* sizes */
    _b = typography.fontSize, 
    /* sizes */
    fontSize = _b === void 0 ? 14 : _b, _c = typography.htmlFontSize, htmlFontSize = _c === void 0 ? 16 : _c, 
    /* weights */
    _d = typography.fontWeightNormal, 
    /* weights */
    fontWeightNormal = _d === void 0 ? 400 : _d, _e = typography.fontWeightLight, fontWeightLight = _e === void 0 ? 300 : _e, _f = typography.fontWeightBold, fontWeightBold = _f === void 0 ? 700 : _f;
    var coef = fontSize / 14;
    var pxToRem = function (size) { return "".concat((size / htmlFontSize) * coef, "rem"); };
    return {
        fontFamily: fontFamily,
        h1: pxToRem(96),
        h2: pxToRem(60),
        h3: pxToRem(48),
        h4: pxToRem(34),
        h5: pxToRem(24),
        h6: pxToRem(20),
        button: pxToRem(14),
        small: pxToRem(12),
        fontWeightNormal: fontWeightNormal,
        fontWeightLight: fontWeightLight,
        fontWeightBold: fontWeightBold,
    };
};
export default createTypography;
