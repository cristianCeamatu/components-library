import createPalette from './palette';
import createTypography from './typography';
import spacing from './spacing';
import misc from './misc';
var createTheme = function (options) {
    var _a = options || {}, _b = _a.palette, paletteInput = _b === void 0 ? {} : _b, _c = _a.typography, typographyInput = _c === void 0 ? {} : _c;
    var palette = createPalette(paletteInput);
    var typography = createTypography(typographyInput);
    return {
        palette: palette,
        spacing: spacing,
        typography: typography,
        misc: misc,
    };
};
export default createTheme;
